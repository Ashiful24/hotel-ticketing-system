# Hotel Ticketing System — API Documentation

> **Base URL:** `http://localhost:3000`  
> **Stack:** NestJS · PostgreSQL · Prisma · JWT  
> **Last reviewed from source:** current codebase (`src/`)

এই ডক থেকে প্রজেক্টের **বর্তমান অবস্থা** বোঝা যাবে — কোন API আছে, কী লাগে, কী এখনো নেই, এবং সামনে কী করতে হবে।

---

## 1. System Overview

হোটেলের অভ্যন্তরীণ issue/ticket ম্যানেজমেন্ট ব্যাকএন্ড।

| Module | Prefix | Auth | Status |
|--------|--------|------|--------|
| Health | `/` | Public | ✅ Working |
| Auth | `/auth` | Public | ✅ Working |
| Users | `/users` | Public *(guard commented out)* | ✅ Working |
| Department | `/department` | Public *(guard commented out)* | ✅ Working |
| Role | `/role` | Public | ✅ Working |
| Ticket | `/ticket` | **JWT required** | ✅ Partial |

### Standard Response Wrapper

সব successful response `ResponseInterceptor` দিয়ে wrap হয়:

```json
{
  "success": true,
  "data": { },
  "message": "Request successful"
}
```

> যদি service নিজে `{ data, message }` return করে, তাহলে সেই `data`/`message` ব্যবহার হয়।  
> Ticket list এর ক্ষেত্রে pagination fields `data` এর ভিতরে nested হয়ে যেতে পারে — client এ handle করতে হবে।

### Auth Header (protected routes)

```http
Authorization: Bearer <accessToken>
```

JWT payload: `{ id, email }` · Expiry: **1 day**

---

## 2. Enums (Database)

### UserType
`ADMIN` | `STAFF` | `FRONTDESK` | `SUPERVISOR`

### Priority
`LOW` | `MEDIUM` | `HIGH` | `URGENT`

### TicketStatus
`OPEN` | `ASSIGNED` | `IN_PROGRESS` | `ON_HOLD` | `DONE` | `VERIFIED` | `CLOSED` | `REOPENED` | `CANCELLED`

---

## 3. Auth APIs (`/auth`)

### 3.1 Login
`POST /auth/login` · **Public**

Login করে JWT + user info দেয়।

**Request body**

| Field | Type | Required | Rules |
|-------|------|----------|-------|
| email | string | ✅ | Valid email |
| password | string | ✅ | — |

```json
{
  "email": "admin@hotel.com",
  "password": "secret123"
}
```

**Success response (`data`)**

```json
{
  "accessToken": "eyJhbGciOi...",
  "user": {
    "id": "1",
    "firstName": "Admin",
    "lastName": "User",
    "email": "admin@hotel.com",
    "phone": "01700000000",
    "nid": "1234567890",
    "address": "Dhaka",
    "profileImg": null,
    "userType": "ADMIN",
    "createdAt": "2026-01-01T00:00:00.000Z"
  }
}
```

**Errors**
- `401` — User not found / Password not matched

---

### 3.2 Change Password
`POST /auth/change-password` · **JWT required**

User id JWT থেকে নেওয়া হয় — body-তে `userId` লাগে না।

**Request body**

| Field | Type | Required | Rules |
|-------|------|----------|-------|
| currentPassword | string | ✅ | — |
| newPassword | string | ✅ | Min length 6 |

```json
{
  "currentPassword": "oldPass",
  "newPassword": "newPass123"
}
```

**Success**
```json
{ "message": "Password changed successfully" }
```

**Errors**
- `401` — User not found / Current password does not match

---

## 4. User APIs (`/users`)

> সব endpoint: **JWT + `ADMIN` only**

### 4.1 Create User
`POST /users/create` · Public

**Request body**

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| email | string | ✅ | Unique |
| password | string | ✅ | bcrypt hashed before save |
| nid | string | ✅ | Unique |
| userType | UserType | ✅ | ADMIN / STAFF / FRONTDESK / SUPERVISOR |
| phone | string | ⚠️ | Schema-এ unique; DTO-তে optional — practically পাঠানো উচিত |
| firstName | string | ❌ | |
| lastName | string | ❌ | |
| address | string | ❌ | |
| profileImg | string | ❌ | |

```json
{
  "firstName": "Karim",
  "lastName": "Hossain",
  "email": "karim@hotel.com",
  "password": "pass123",
  "phone": "01711111111",
  "nid": "1990123456789",
  "address": "Gulshan",
  "userType": "STAFF"
}
```

**Errors**
- `400` — Duplicate email / phone / unique field

---

### 4.2 Get All Users
`GET /users/all` · Public

Returns array of `UserResponseDto` (password excluded via `@Expose`).

---

### 4.3 Get Users by Type
`GET /users/by-type?userType=STAFF` · Public

| Query | Type | Required |
|-------|------|----------|
| userType | UserType enum | ✅ |

---

### 4.4 Get User by ID
`GET /users/:id` · Public

| Param | Type |
|-------|------|
| id | number |

**Note:** এই endpoint raw Prisma user return করে (password hash সহ) — security risk।

**Errors**
- `404` — User not found

---

### 4.5 Update User
`PUT /users/update/:id` · Public

**Body (all optional)**
`firstName`, `lastName`, `phone`, `address`, `profileImg`

Email / password / userType / nid update করা যায় না এই DTO দিয়ে।

---

### 4.6 Delete User
`DELETE /users/delete/:id` · Public

**Errors**
- `404` — User not found

---

## 5. Department APIs (`/department`)

> Create / list / update / delete → **JWT + `ADMIN`**  
> `GET /supervisor/:supervisorId` → **JWT only** (any logged-in user)

### 5.1 Create Department
`POST /department/create`

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| name | string | ✅ | |
| code | string | ✅ | Unique |
| description | string | ❌ | |
| supervisorId | number | ❌ | User must exist & `userType === SUPERVISOR`; one supervisor → one department |

```json
{
  "name": "Housekeeping",
  "code": "HK",
  "description": "Room cleaning & laundry",
  "supervisorId": 3
}
```

**Errors**
- `400` — Duplicate code / not supervisor / supervisor already assigned
- `404` — Supervisor user not found (via `getAUser`)

---

### 5.2 List Departments
`GET /department/list`

---

### 5.3 Update Department
`PUT /department/update/:id`

| Field | Type | Required |
|-------|------|----------|
| name | string | ❌ |
| description | string | ❌ |
| supervisorId | number | ❌ |

`code` update করা যায় না।

**Errors**
- `404` — Department Not Found
- `400` — Invalid supervisor rules

---

### 5.4 Delete Department
`DELETE /department/delete/:id`

**Errors**
- `404` — Department Not Found  
- FK conflict সম্ভব যদি roles/tickets linked থাকে

---

### 5.5 Get Department by Supervisor
`GET /department/supervisor/:supervisorId`

**Errors**
- `404` — Department not found for this supervisor

---

## 6. Role APIs (`/role`)

Department-এর অধীনে job role (যেমন Cleaner, Technician)। Staff-কে role assign করা যায়।

> Create / update / delete / getByDepartment / assign / unassign → **JWT + `ADMIN`**  
> `GET /list` → **JWT only** (any logged-in user)

### 6.1 Create Role
`POST /role/create`

| Field | Type | Required |
|-------|------|----------|
| name | string | ✅ |
| code | string | ✅ (globally unique via `code`) |
| description | string | ❌ |
| departmentId | number | ✅ |

```json
{
  "name": "Room Cleaner",
  "code": "HK-CLEANER",
  "description": "Cleans guest rooms",
  "departmentId": 1
}
```

**Errors**
- `400` — Role code already exists
- `404` — Department not found

---

### 6.2 Update Role
`PUT /role/update/:id`

Optional: `name`, `description`  
(`code` / `departmentId` update করা যায় না)

---

### 6.3 Delete Role
`DELETE /role/delete/:id`

Response: `{ "message": "Role deleted successfully" }`

---

### 6.4 List Roles
`GET /role/list`

---

### 6.5 Roles by Department
`GET /role/getByDepartment/:departmentId`

---

### 6.5.1 Staff by Role
`GET /role/staff/:roleId` · **JWT + `ADMIN` | `SUPERVISOR`**

একটা role-এ কতজন staff assign আছে এবং তাদের list।

**Success (`data`)**
```json
{
  "roleId": 2,
  "totalStaff": 3,
  "staff": [
    {
      "id": 5,
      "firstName": "Karim",
      "lastName": "Hossain",
      "email": "karim@hotel.com",
      "phone": "01711111111",
      "userType": "STAFF",
      "createdAt": "2026-01-01T00:00:00.000Z"
    }
  ]
}
```

**Errors**
- `404` — Role not found

---

### 6.6 Assign Role to Staff
`POST /role/assign`

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| staffId | number | ✅ | User must be `STAFF` |
| roleId | number | ✅ | |

```json
{ "staffId": 5, "roleId": 2 }
```

**Errors**
- `404` — User / Role not found
- `400` — Only staff users can be assigned roles
- `409` — Already has this role

---

### 6.7 Unassign Role
`POST /role/unassign`

```json
{ "staffId": 5, "roleId": 2 }
```

**Errors**
- `404` — Assignment not found

---

## 7. Ticket APIs (`/ticket`)

> **সব endpoint এ `AuthGuard` + `RolesGuard` লাগে।**  
> `@Roles()` decorator কোথাও set করা নেই → RolesGuard practically সব authenticated user কে allow করে।  
> Create এ `AuditInterceptor` চলে (request audit log)।

### 7.1 Create Ticket
`POST /ticket/create` · **JWT required**

Creator = JWT এর `user.id`  
Auto: `ticketCode = TICKET-<timestamp>`, `status = OPEN`  
Status history row ও create হয়।

| Field | Type | Required |
|-------|------|----------|
| title | string | ✅ |
| priority | Priority | ✅ |
| departmentId | number | ✅ |
| roomNumber | number | ❌ |
| description | string | ❌ |

```json
{
  "title": "AC not working",
  "description": "Room 402 AC cooling issue",
  "priority": "HIGH",
  "departmentId": 1,
  "roomNumber": 402
}
```

---

### 7.2 Update Ticket (basic info)
`PUT /ticket/update/:id` · **JWT required**

| Field | Type | Required |
|-------|------|----------|
| title | string | ❌ |
| description | string | ❌ |
| priority | Priority | ❌ |
| roomNumber | number | ❌ |
| departmentId | number | ❌ |

**এখনো নেই এই update দিয়ে:** status change, assign, deadline, feedback

**Errors**
- `404` — Ticket not found

---

### 7.3 Ticket Details
`GET /ticket/details/:id` · **JWT required**

Returns ticket + `history[]` (status history).

---

### 7.3.1 Assign Ticket (Supervisor)
`PUT /ticket/assign/:id` · **JWT + `SUPERVISOR`**

Supervisor নিজের department-এর ticket, সেই department-এ role-assigned STAFF-কে assign করে।

**Request body**

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| staffId | number | ✅ | Must be `STAFF` with a role in ticket's department |
| deadline | date | ❌ | Optional deadline |

```json
{
  "staffId": 5,
  "deadline": "2026-08-01T18:00:00.000Z"
}
```

**Rules**
- Ticket must belong to the supervisor's department
- Staff must have a `StaffRole` linked to a `Role` in that department
- Cannot assign `CLOSED` / `CANCELLED` tickets
- Sets `assignTo`, `assignBy`, `assignAt`, optional `deadline`, status → `ASSIGNED`
- Writes a `TicketStatusHistory` row

**Errors**
- `403` — Not supervisor / ticket not in own department
- `404` — Ticket or staff not found
- `400` — Staff not STAFF / no department role / invalid status

---

### 7.3.2 Change Ticket Status
`PUT /ticket/status/:id` · **JWT + `STAFF` | `SUPERVISOR` | `FRONTDESK`**

Status change + `TicketStatusHistory` entry.

**Request body**
```json
{ "status": "IN_PROGRESS" }
```

**Allowed transitions**

| Role | Rules |
|------|--------|
| **STAFF** | শুধু নিজের assigned ticket: `ASSIGNED→IN_PROGRESS`, `IN_PROGRESS→ON_HOLD`, `ON_HOLD→IN_PROGRESS`, `IN_PROGRESS→DONE` |
| **SUPERVISOR** | নিজের department + ticket `DONE` হলে: `DONE→VERIFIED` |
| **FRONTDESK** | `VERIFIED→CLOSED`, `CLOSED→REOPENED`; যেকোনো সময় `CANCELLED` (cancelled হলে আর reopen নয়) |

**Errors**
- `403` — Wrong role scope / not assignee / wrong department
- `404` — Ticket not found
- `400` — Invalid transition / already same status / cancelled ticket

---

### 7.4 Ticket List (pagination + filter + search)
`GET /ticket/list` · **JWT required**

**Visibility by role**

| UserType | Sees |
|----------|------|
| `ADMIN`, `FRONTDESK` | সব ticket |
| `SUPERVISOR` | নিজের department-এর সব ticket **অথবা** নিজের কাছে assigned ticket |
| `STAFF` | শুধু নিজের কাছে assigned ticket |

Supervisor/Staff `departmentId` query দিয়ে অন্য department-এর ticket দেখতে পারবে না।

| Query | Type | Default | Notes |
|-------|------|---------|-------|
| page | number | 1 | |
| limit | number | 5 | |
| tab | TicketStatus | — | Status filter (OPEN, ASSIGNED, …) |
| priority | Priority | — | |
| departmentId | number | — | শুধু ADMIN / FRONTDESK |
| date | date | — | That calendar day’s `createdAt` |
| searchField | string | — | `ticketId` \| `creatorId` \| `assignTo` |
| searchQuery | number | — | Required if `searchField` given |

**Example**
```http
GET /ticket/list?page=1&limit=10&tab=OPEN&priority=HIGH&departmentId=1
```

**Response shape (service return)**
```json
{
  "data": [ /* tickets */ ],
  "currentPage": 1,
  "itemPerPage": 10,
  "totalItem": 42,
  "totalPages": 5
}
```

**Validation**
- `searchField` থাকলে `searchQuery` না থাকলে → `400 Bad Request`

---

## 8. Health

`GET /` · Public  
Returns hello string from `AppService`.

---

## 9. Domain Model (Quick Map)

```
User (ADMIN/STAFF/FRONTDESK/SUPERVISOR)
  ├── creates Ticket
  ├── may be assignee of Ticket
  ├── may supervise 1 Department
  └── StaffRole ←→ Role ← Department
                      └── tickets[]
```

**Ticket lifecycle (schema enums exist):**  
`OPEN → ASSIGNED → IN_PROGRESS → ON_HOLD? → DONE → VERIFIED → CLOSED`  
(+ `REOPENED`, `CANCELLED`)

কিন্তু API তে status transition / assign endpoints এখনো implement হয়নি।

---

## 10. Current Condition Snapshot

### ✅ Implemented
- JWT login + password change
- User CRUD + filter by type
- Department CRUD + supervisor linkage rules
- Role CRUD + staff assign/unassign
- Ticket create / basic update / details / filtered list
- Global validation pipe (`whitelist`, `forbidNonWhitelisted`)
- Response interceptor
- Audit log on ticket create
- Unit test files present for core modules

### ⚠️ Incomplete / Risky (important for next work)
| Issue | Impact |
|-------|--------|
| Most routes public (guards commented) | Security gap |
| `change-password` public + takes `userId` | Anyone can try change |
| No ticket **assign** API | Core workflow missing |
| No ticket **status change** API | Lifecycle incomplete |
| No **feedback** API | README feature missing |
| No dedicated register under `/auth` | Create via `/users/create` only |
| `GET /users/:id` returns password hash | Leak risk |
| `assigneeId` list search likely broken | Filter bug |
| `@Roles()` unused on ticket routes | RBAC not really enforced |
| No Swagger / OpenAPI | Harder for frontend team |

### ❌ Not found in code (README mentioned but missing)
- `PUT /tickets/:id/assign`
- Feedback module / endpoints
- Guest user flow
- Explicit search endpoint `/tickets/search` (partially covered by list query)

---

## 11. Suggested Next Steps (forward roadmap)

Priority order প্রজেক্ট এগোনোর জন্য:

1. **Security harden**
   - Users / Department / Role / change-password এ AuthGuard চালু করো
   - Admin-only routes এ `@Roles('ADMIN')` লাগাও
   - User responses থেকে সব জায়গায় password exclude করো

2. **Ticket workflow APIs**
   - `PUT /ticket/assign/:id` → `{ assignTo, deadline }`
   - `PUT /ticket/status/:id` → `{ status }` + write `TicketStatusHistory`
   - `PUT /ticket/feedback/:id` → `{ feedback }` (after DONE/VERIFIED)

3. **List fixes**
   - Fix `assigneeId` search to use `assignTo`
   - Support text search on `ticketCode` / `title`
   - Stabilize pagination response shape under interceptor

4. **DX**
   - Add Swagger (`@nestjs/swagger`)
   - Align README endpoints with real routes (`/ticket` not `/tickets`)

5. **Frontend readiness**
   - Login → store JWT → call `/ticket/*`
   - Admin screens: Users, Departments, Roles
   - Ops screens: Ticket board by `tab` status

---

## 12. Quick cURL Cheat Sheet

```bash
# Login
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@hotel.com","password":"pass"}'

# Create ticket (replace TOKEN)
curl -X POST http://localhost:3000/ticket/create \
  -H "Authorization: Bearer TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"title":"Broken lamp","priority":"MEDIUM","departmentId":1,"roomNumber":101}'

# List open high-priority tickets
curl "http://localhost:3000/ticket/list?page=1&limit=10&tab=OPEN&priority=HIGH" \
  -H "Authorization: Bearer TOKEN"

# Create department
curl -X POST http://localhost:3000/department/create \
  -H "Content-Type: application/json" \
  -d '{"name":"Engineering","code":"ENG","description":"Maintenance"}'
```

---

## 13. Endpoint Index (all)

| Method | Endpoint | Auth |
|--------|----------|------|
| GET | `/` | Public |
| POST | `/auth/login` | Public |
| POST | `/auth/change-password` | JWT ✅ |
| POST | `/users/create` | JWT + ADMIN |
| GET | `/users/all` | JWT + ADMIN |
| GET | `/users/by-type?userType=` | JWT + ADMIN |
| GET | `/users/:id` | JWT + ADMIN |
| PUT | `/users/update/:id` | JWT + ADMIN |
| DELETE | `/users/delete/:id` | JWT + ADMIN |
| POST | `/department/create` | JWT + ADMIN |
| GET | `/department/list` | JWT + ADMIN |
| PUT | `/department/update/:id` | JWT + ADMIN |
| DELETE | `/department/delete/:id` | JWT + ADMIN |
| GET | `/department/supervisor/:supervisorId` | JWT ✅ |
| POST | `/role/create` | JWT + ADMIN |
| PUT | `/role/update/:id` | JWT + ADMIN |
| DELETE | `/role/delete/:id` | JWT + ADMIN |
| GET | `/role/list` | JWT ✅ |
| GET | `/role/getByDepartment/:departmentId` | JWT + ADMIN |
| GET | `/role/staff/:roleId` | JWT + ADMIN \| SUPERVISOR |
| POST | `/role/assign` | JWT + ADMIN |
| POST | `/role/unassign` | JWT + ADMIN |
| POST | `/ticket/create` | JWT ✅ |
| PUT | `/ticket/update/:id` | JWT ✅ |
| PUT | `/ticket/assign/:id` | JWT + SUPERVISOR |
| PUT | `/ticket/status/:id` | JWT + STAFF \| SUPERVISOR \| FRONTDESK |
| GET | `/ticket/details/:id` | JWT ✅ |
| GET | `/ticket/list` | JWT ✅ |

**Total implemented:** 24 endpoints  
**Core missing for full product:** assign, status transition, feedback, proper RBAC

---

এই ডক ফাইল: `hotel-ticketing-system/API_DOCUMENTATION.md`  
প্রশ্ন থাকলে বলো কোন module (Auth / Ticket / Role) আগে implement করতে চাও — সেখান থেকেই next APIs লিখে দিতে পারি।
