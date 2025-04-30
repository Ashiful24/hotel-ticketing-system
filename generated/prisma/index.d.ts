
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model userTypes
 * 
 */
export type userTypes = $Result.DefaultSelection<Prisma.$userTypesPayload>
/**
 * Model user_userType
 * 
 */
export type user_userType = $Result.DefaultSelection<Prisma.$user_userTypePayload>
/**
 * Model userRole
 * 
 */
export type userRole = $Result.DefaultSelection<Prisma.$userRolePayload>
/**
 * Model user_userRole
 * 
 */
export type user_userRole = $Result.DefaultSelection<Prisma.$user_userRolePayload>
/**
 * Model department
 * 
 */
export type department = $Result.DefaultSelection<Prisma.$departmentPayload>
/**
 * Model user_department
 * 
 */
export type user_department = $Result.DefaultSelection<Prisma.$user_departmentPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userTypes`: Exposes CRUD operations for the **userTypes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserTypes
    * const userTypes = await prisma.userTypes.findMany()
    * ```
    */
  get userTypes(): Prisma.userTypesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_userType`: Exposes CRUD operations for the **user_userType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_userTypes
    * const user_userTypes = await prisma.user_userType.findMany()
    * ```
    */
  get user_userType(): Prisma.user_userTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userRole`: Exposes CRUD operations for the **userRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserRoles
    * const userRoles = await prisma.userRole.findMany()
    * ```
    */
  get userRole(): Prisma.userRoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_userRole`: Exposes CRUD operations for the **user_userRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_userRoles
    * const user_userRoles = await prisma.user_userRole.findMany()
    * ```
    */
  get user_userRole(): Prisma.user_userRoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.department`: Exposes CRUD operations for the **department** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.department.findMany()
    * ```
    */
  get department(): Prisma.departmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_department`: Exposes CRUD operations for the **user_department** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_departments
    * const user_departments = await prisma.user_department.findMany()
    * ```
    */
  get user_department(): Prisma.user_departmentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    user: 'user',
    userTypes: 'userTypes',
    user_userType: 'user_userType',
    userRole: 'userRole',
    user_userRole: 'user_userRole',
    department: 'department',
    user_department: 'user_department'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "userTypes" | "user_userType" | "userRole" | "user_userRole" | "department" | "user_department"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      userTypes: {
        payload: Prisma.$userTypesPayload<ExtArgs>
        fields: Prisma.userTypesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userTypesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userTypesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userTypesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userTypesPayload>
          }
          findFirst: {
            args: Prisma.userTypesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userTypesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userTypesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userTypesPayload>
          }
          findMany: {
            args: Prisma.userTypesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userTypesPayload>[]
          }
          create: {
            args: Prisma.userTypesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userTypesPayload>
          }
          createMany: {
            args: Prisma.userTypesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userTypesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userTypesPayload>[]
          }
          delete: {
            args: Prisma.userTypesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userTypesPayload>
          }
          update: {
            args: Prisma.userTypesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userTypesPayload>
          }
          deleteMany: {
            args: Prisma.userTypesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userTypesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userTypesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userTypesPayload>[]
          }
          upsert: {
            args: Prisma.userTypesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userTypesPayload>
          }
          aggregate: {
            args: Prisma.UserTypesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserTypes>
          }
          groupBy: {
            args: Prisma.userTypesGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserTypesGroupByOutputType>[]
          }
          count: {
            args: Prisma.userTypesCountArgs<ExtArgs>
            result: $Utils.Optional<UserTypesCountAggregateOutputType> | number
          }
        }
      }
      user_userType: {
        payload: Prisma.$user_userTypePayload<ExtArgs>
        fields: Prisma.user_userTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_userTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_userTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_userTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_userTypePayload>
          }
          findFirst: {
            args: Prisma.user_userTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_userTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_userTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_userTypePayload>
          }
          findMany: {
            args: Prisma.user_userTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_userTypePayload>[]
          }
          create: {
            args: Prisma.user_userTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_userTypePayload>
          }
          createMany: {
            args: Prisma.user_userTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_userTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_userTypePayload>[]
          }
          delete: {
            args: Prisma.user_userTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_userTypePayload>
          }
          update: {
            args: Prisma.user_userTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_userTypePayload>
          }
          deleteMany: {
            args: Prisma.user_userTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_userTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_userTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_userTypePayload>[]
          }
          upsert: {
            args: Prisma.user_userTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_userTypePayload>
          }
          aggregate: {
            args: Prisma.User_userTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_userType>
          }
          groupBy: {
            args: Prisma.user_userTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_userTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_userTypeCountArgs<ExtArgs>
            result: $Utils.Optional<User_userTypeCountAggregateOutputType> | number
          }
        }
      }
      userRole: {
        payload: Prisma.$userRolePayload<ExtArgs>
        fields: Prisma.userRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userRolePayload>
          }
          findFirst: {
            args: Prisma.userRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userRolePayload>
          }
          findMany: {
            args: Prisma.userRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userRolePayload>[]
          }
          create: {
            args: Prisma.userRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userRolePayload>
          }
          createMany: {
            args: Prisma.userRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userRoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userRolePayload>[]
          }
          delete: {
            args: Prisma.userRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userRolePayload>
          }
          update: {
            args: Prisma.userRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userRolePayload>
          }
          deleteMany: {
            args: Prisma.userRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userRoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userRolePayload>[]
          }
          upsert: {
            args: Prisma.userRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userRolePayload>
          }
          aggregate: {
            args: Prisma.UserRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserRole>
          }
          groupBy: {
            args: Prisma.userRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.userRoleCountArgs<ExtArgs>
            result: $Utils.Optional<UserRoleCountAggregateOutputType> | number
          }
        }
      }
      user_userRole: {
        payload: Prisma.$user_userRolePayload<ExtArgs>
        fields: Prisma.user_userRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_userRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_userRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_userRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_userRolePayload>
          }
          findFirst: {
            args: Prisma.user_userRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_userRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_userRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_userRolePayload>
          }
          findMany: {
            args: Prisma.user_userRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_userRolePayload>[]
          }
          create: {
            args: Prisma.user_userRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_userRolePayload>
          }
          createMany: {
            args: Prisma.user_userRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_userRoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_userRolePayload>[]
          }
          delete: {
            args: Prisma.user_userRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_userRolePayload>
          }
          update: {
            args: Prisma.user_userRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_userRolePayload>
          }
          deleteMany: {
            args: Prisma.user_userRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_userRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_userRoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_userRolePayload>[]
          }
          upsert: {
            args: Prisma.user_userRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_userRolePayload>
          }
          aggregate: {
            args: Prisma.User_userRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_userRole>
          }
          groupBy: {
            args: Prisma.user_userRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_userRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_userRoleCountArgs<ExtArgs>
            result: $Utils.Optional<User_userRoleCountAggregateOutputType> | number
          }
        }
      }
      department: {
        payload: Prisma.$departmentPayload<ExtArgs>
        fields: Prisma.departmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.departmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.departmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>
          }
          findFirst: {
            args: Prisma.departmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.departmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>
          }
          findMany: {
            args: Prisma.departmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>[]
          }
          create: {
            args: Prisma.departmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>
          }
          createMany: {
            args: Prisma.departmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.departmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>[]
          }
          delete: {
            args: Prisma.departmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>
          }
          update: {
            args: Prisma.departmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>
          }
          deleteMany: {
            args: Prisma.departmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.departmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.departmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>[]
          }
          upsert: {
            args: Prisma.departmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>
          }
          aggregate: {
            args: Prisma.DepartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartment>
          }
          groupBy: {
            args: Prisma.departmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.departmentCountArgs<ExtArgs>
            result: $Utils.Optional<DepartmentCountAggregateOutputType> | number
          }
        }
      }
      user_department: {
        payload: Prisma.$user_departmentPayload<ExtArgs>
        fields: Prisma.user_departmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_departmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_departmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_departmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_departmentPayload>
          }
          findFirst: {
            args: Prisma.user_departmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_departmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_departmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_departmentPayload>
          }
          findMany: {
            args: Prisma.user_departmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_departmentPayload>[]
          }
          create: {
            args: Prisma.user_departmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_departmentPayload>
          }
          createMany: {
            args: Prisma.user_departmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_departmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_departmentPayload>[]
          }
          delete: {
            args: Prisma.user_departmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_departmentPayload>
          }
          update: {
            args: Prisma.user_departmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_departmentPayload>
          }
          deleteMany: {
            args: Prisma.user_departmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_departmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_departmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_departmentPayload>[]
          }
          upsert: {
            args: Prisma.user_departmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_departmentPayload>
          }
          aggregate: {
            args: Prisma.User_departmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_department>
          }
          groupBy: {
            args: Prisma.user_departmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_departmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_departmentCountArgs<ExtArgs>
            result: $Utils.Optional<User_departmentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: userOmit
    userTypes?: userTypesOmit
    user_userType?: user_userTypeOmit
    userRole?: userRoleOmit
    user_userRole?: user_userRoleOmit
    department?: departmentOmit
    user_department?: user_departmentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    userTypes: number
    userRoles: number
    departments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userTypes?: boolean | UserCountOutputTypeCountUserTypesArgs
    userRoles?: boolean | UserCountOutputTypeCountUserRolesArgs
    departments?: boolean | UserCountOutputTypeCountDepartmentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_userTypeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_userRoleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDepartmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_departmentWhereInput
  }


  /**
   * Count Type UserTypesCountOutputType
   */

  export type UserTypesCountOutputType = {
    users: number
  }

  export type UserTypesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UserTypesCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * UserTypesCountOutputType without action
   */
  export type UserTypesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTypesCountOutputType
     */
    select?: UserTypesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserTypesCountOutputType without action
   */
  export type UserTypesCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_userTypeWhereInput
  }


  /**
   * Count Type UserRoleCountOutputType
   */

  export type UserRoleCountOutputType = {
    users: number
  }

  export type UserRoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UserRoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * UserRoleCountOutputType without action
   */
  export type UserRoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleCountOutputType
     */
    select?: UserRoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserRoleCountOutputType without action
   */
  export type UserRoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_userRoleWhereInput
  }


  /**
   * Count Type DepartmentCountOutputType
   */

  export type DepartmentCountOutputType = {
    users: number
  }

  export type DepartmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | DepartmentCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCountOutputType
     */
    select?: DepartmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_departmentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    currentTickets: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    currentTickets: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    address: string | null
    phone: string | null
    isApproved: boolean | null
    isActive: boolean | null
    isAvailable: boolean | null
    currentTickets: number | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    address: string | null
    phone: string | null
    isApproved: boolean | null
    isActive: boolean | null
    isAvailable: boolean | null
    currentTickets: number | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    password: number
    address: number
    phone: number
    isApproved: number
    isActive: number
    isAvailable: number
    currentTickets: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    currentTickets?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    currentTickets?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    address?: true
    phone?: true
    isApproved?: true
    isActive?: true
    isAvailable?: true
    currentTickets?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    address?: true
    phone?: true
    isApproved?: true
    isActive?: true
    isAvailable?: true
    currentTickets?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    address?: true
    phone?: true
    isApproved?: true
    isActive?: true
    isAvailable?: true
    currentTickets?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    email: string
    password: string
    address: string
    phone: string
    isApproved: boolean
    isActive: boolean
    isAvailable: boolean
    currentTickets: number
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    address?: boolean
    phone?: boolean
    isApproved?: boolean
    isActive?: boolean
    isAvailable?: boolean
    currentTickets?: boolean
    createdAt?: boolean
    userTypes?: boolean | user$userTypesArgs<ExtArgs>
    userRoles?: boolean | user$userRolesArgs<ExtArgs>
    departments?: boolean | user$departmentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    address?: boolean
    phone?: boolean
    isApproved?: boolean
    isActive?: boolean
    isAvailable?: boolean
    currentTickets?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    address?: boolean
    phone?: boolean
    isApproved?: boolean
    isActive?: boolean
    isAvailable?: boolean
    currentTickets?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    address?: boolean
    phone?: boolean
    isApproved?: boolean
    isActive?: boolean
    isAvailable?: boolean
    currentTickets?: boolean
    createdAt?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "password" | "address" | "phone" | "isApproved" | "isActive" | "isAvailable" | "currentTickets" | "createdAt", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userTypes?: boolean | user$userTypesArgs<ExtArgs>
    userRoles?: boolean | user$userRolesArgs<ExtArgs>
    departments?: boolean | user$departmentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      userTypes: Prisma.$user_userTypePayload<ExtArgs>[]
      userRoles: Prisma.$user_userRolePayload<ExtArgs>[]
      departments: Prisma.$user_departmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      email: string
      password: string
      address: string
      phone: string
      isApproved: boolean
      isActive: boolean
      isAvailable: boolean
      currentTickets: number
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userTypes<T extends user$userTypesArgs<ExtArgs> = {}>(args?: Subset<T, user$userTypesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_userTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userRoles<T extends user$userRolesArgs<ExtArgs> = {}>(args?: Subset<T, user$userRolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_userRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    departments<T extends user$departmentsArgs<ExtArgs> = {}>(args?: Subset<T, user$departmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_departmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'Int'>
    readonly firstName: FieldRef<"user", 'String'>
    readonly lastName: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly address: FieldRef<"user", 'String'>
    readonly phone: FieldRef<"user", 'String'>
    readonly isApproved: FieldRef<"user", 'Boolean'>
    readonly isActive: FieldRef<"user", 'Boolean'>
    readonly isAvailable: FieldRef<"user", 'Boolean'>
    readonly currentTickets: FieldRef<"user", 'Int'>
    readonly createdAt: FieldRef<"user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.userTypes
   */
  export type user$userTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_userType
     */
    select?: user_userTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_userType
     */
    omit?: user_userTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_userTypeInclude<ExtArgs> | null
    where?: user_userTypeWhereInput
    orderBy?: user_userTypeOrderByWithRelationInput | user_userTypeOrderByWithRelationInput[]
    cursor?: user_userTypeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_userTypeScalarFieldEnum | User_userTypeScalarFieldEnum[]
  }

  /**
   * user.userRoles
   */
  export type user$userRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_userRole
     */
    select?: user_userRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_userRole
     */
    omit?: user_userRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_userRoleInclude<ExtArgs> | null
    where?: user_userRoleWhereInput
    orderBy?: user_userRoleOrderByWithRelationInput | user_userRoleOrderByWithRelationInput[]
    cursor?: user_userRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_userRoleScalarFieldEnum | User_userRoleScalarFieldEnum[]
  }

  /**
   * user.departments
   */
  export type user$departmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_department
     */
    select?: user_departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_department
     */
    omit?: user_departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_departmentInclude<ExtArgs> | null
    where?: user_departmentWhereInput
    orderBy?: user_departmentOrderByWithRelationInput | user_departmentOrderByWithRelationInput[]
    cursor?: user_departmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_departmentScalarFieldEnum | User_departmentScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model userTypes
   */

  export type AggregateUserTypes = {
    _count: UserTypesCountAggregateOutputType | null
    _avg: UserTypesAvgAggregateOutputType | null
    _sum: UserTypesSumAggregateOutputType | null
    _min: UserTypesMinAggregateOutputType | null
    _max: UserTypesMaxAggregateOutputType | null
  }

  export type UserTypesAvgAggregateOutputType = {
    id: number | null
  }

  export type UserTypesSumAggregateOutputType = {
    id: number | null
  }

  export type UserTypesMinAggregateOutputType = {
    id: number | null
    userTypeName: string | null
    createdAt: Date | null
    isActive: boolean | null
  }

  export type UserTypesMaxAggregateOutputType = {
    id: number | null
    userTypeName: string | null
    createdAt: Date | null
    isActive: boolean | null
  }

  export type UserTypesCountAggregateOutputType = {
    id: number
    userTypeName: number
    createdAt: number
    isActive: number
    _all: number
  }


  export type UserTypesAvgAggregateInputType = {
    id?: true
  }

  export type UserTypesSumAggregateInputType = {
    id?: true
  }

  export type UserTypesMinAggregateInputType = {
    id?: true
    userTypeName?: true
    createdAt?: true
    isActive?: true
  }

  export type UserTypesMaxAggregateInputType = {
    id?: true
    userTypeName?: true
    createdAt?: true
    isActive?: true
  }

  export type UserTypesCountAggregateInputType = {
    id?: true
    userTypeName?: true
    createdAt?: true
    isActive?: true
    _all?: true
  }

  export type UserTypesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which userTypes to aggregate.
     */
    where?: userTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userTypes to fetch.
     */
    orderBy?: userTypesOrderByWithRelationInput | userTypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned userTypes
    **/
    _count?: true | UserTypesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserTypesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserTypesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserTypesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserTypesMaxAggregateInputType
  }

  export type GetUserTypesAggregateType<T extends UserTypesAggregateArgs> = {
        [P in keyof T & keyof AggregateUserTypes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserTypes[P]>
      : GetScalarType<T[P], AggregateUserTypes[P]>
  }




  export type userTypesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userTypesWhereInput
    orderBy?: userTypesOrderByWithAggregationInput | userTypesOrderByWithAggregationInput[]
    by: UserTypesScalarFieldEnum[] | UserTypesScalarFieldEnum
    having?: userTypesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserTypesCountAggregateInputType | true
    _avg?: UserTypesAvgAggregateInputType
    _sum?: UserTypesSumAggregateInputType
    _min?: UserTypesMinAggregateInputType
    _max?: UserTypesMaxAggregateInputType
  }

  export type UserTypesGroupByOutputType = {
    id: number
    userTypeName: string
    createdAt: Date
    isActive: boolean
    _count: UserTypesCountAggregateOutputType | null
    _avg: UserTypesAvgAggregateOutputType | null
    _sum: UserTypesSumAggregateOutputType | null
    _min: UserTypesMinAggregateOutputType | null
    _max: UserTypesMaxAggregateOutputType | null
  }

  type GetUserTypesGroupByPayload<T extends userTypesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserTypesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserTypesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserTypesGroupByOutputType[P]>
            : GetScalarType<T[P], UserTypesGroupByOutputType[P]>
        }
      >
    >


  export type userTypesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userTypeName?: boolean
    createdAt?: boolean
    isActive?: boolean
    users?: boolean | userTypes$usersArgs<ExtArgs>
    _count?: boolean | UserTypesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTypes"]>

  export type userTypesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userTypeName?: boolean
    createdAt?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["userTypes"]>

  export type userTypesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userTypeName?: boolean
    createdAt?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["userTypes"]>

  export type userTypesSelectScalar = {
    id?: boolean
    userTypeName?: boolean
    createdAt?: boolean
    isActive?: boolean
  }

  export type userTypesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userTypeName" | "createdAt" | "isActive", ExtArgs["result"]["userTypes"]>
  export type userTypesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | userTypes$usersArgs<ExtArgs>
    _count?: boolean | UserTypesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userTypesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type userTypesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $userTypesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "userTypes"
    objects: {
      users: Prisma.$user_userTypePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userTypeName: string
      createdAt: Date
      isActive: boolean
    }, ExtArgs["result"]["userTypes"]>
    composites: {}
  }

  type userTypesGetPayload<S extends boolean | null | undefined | userTypesDefaultArgs> = $Result.GetResult<Prisma.$userTypesPayload, S>

  type userTypesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userTypesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserTypesCountAggregateInputType | true
    }

  export interface userTypesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['userTypes'], meta: { name: 'userTypes' } }
    /**
     * Find zero or one UserTypes that matches the filter.
     * @param {userTypesFindUniqueArgs} args - Arguments to find a UserTypes
     * @example
     * // Get one UserTypes
     * const userTypes = await prisma.userTypes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userTypesFindUniqueArgs>(args: SelectSubset<T, userTypesFindUniqueArgs<ExtArgs>>): Prisma__userTypesClient<$Result.GetResult<Prisma.$userTypesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserTypes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userTypesFindUniqueOrThrowArgs} args - Arguments to find a UserTypes
     * @example
     * // Get one UserTypes
     * const userTypes = await prisma.userTypes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userTypesFindUniqueOrThrowArgs>(args: SelectSubset<T, userTypesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userTypesClient<$Result.GetResult<Prisma.$userTypesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userTypesFindFirstArgs} args - Arguments to find a UserTypes
     * @example
     * // Get one UserTypes
     * const userTypes = await prisma.userTypes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userTypesFindFirstArgs>(args?: SelectSubset<T, userTypesFindFirstArgs<ExtArgs>>): Prisma__userTypesClient<$Result.GetResult<Prisma.$userTypesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserTypes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userTypesFindFirstOrThrowArgs} args - Arguments to find a UserTypes
     * @example
     * // Get one UserTypes
     * const userTypes = await prisma.userTypes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userTypesFindFirstOrThrowArgs>(args?: SelectSubset<T, userTypesFindFirstOrThrowArgs<ExtArgs>>): Prisma__userTypesClient<$Result.GetResult<Prisma.$userTypesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userTypesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserTypes
     * const userTypes = await prisma.userTypes.findMany()
     * 
     * // Get first 10 UserTypes
     * const userTypes = await prisma.userTypes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userTypesWithIdOnly = await prisma.userTypes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userTypesFindManyArgs>(args?: SelectSubset<T, userTypesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userTypesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserTypes.
     * @param {userTypesCreateArgs} args - Arguments to create a UserTypes.
     * @example
     * // Create one UserTypes
     * const UserTypes = await prisma.userTypes.create({
     *   data: {
     *     // ... data to create a UserTypes
     *   }
     * })
     * 
     */
    create<T extends userTypesCreateArgs>(args: SelectSubset<T, userTypesCreateArgs<ExtArgs>>): Prisma__userTypesClient<$Result.GetResult<Prisma.$userTypesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserTypes.
     * @param {userTypesCreateManyArgs} args - Arguments to create many UserTypes.
     * @example
     * // Create many UserTypes
     * const userTypes = await prisma.userTypes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userTypesCreateManyArgs>(args?: SelectSubset<T, userTypesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserTypes and returns the data saved in the database.
     * @param {userTypesCreateManyAndReturnArgs} args - Arguments to create many UserTypes.
     * @example
     * // Create many UserTypes
     * const userTypes = await prisma.userTypes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserTypes and only return the `id`
     * const userTypesWithIdOnly = await prisma.userTypes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userTypesCreateManyAndReturnArgs>(args?: SelectSubset<T, userTypesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userTypesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserTypes.
     * @param {userTypesDeleteArgs} args - Arguments to delete one UserTypes.
     * @example
     * // Delete one UserTypes
     * const UserTypes = await prisma.userTypes.delete({
     *   where: {
     *     // ... filter to delete one UserTypes
     *   }
     * })
     * 
     */
    delete<T extends userTypesDeleteArgs>(args: SelectSubset<T, userTypesDeleteArgs<ExtArgs>>): Prisma__userTypesClient<$Result.GetResult<Prisma.$userTypesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserTypes.
     * @param {userTypesUpdateArgs} args - Arguments to update one UserTypes.
     * @example
     * // Update one UserTypes
     * const userTypes = await prisma.userTypes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userTypesUpdateArgs>(args: SelectSubset<T, userTypesUpdateArgs<ExtArgs>>): Prisma__userTypesClient<$Result.GetResult<Prisma.$userTypesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserTypes.
     * @param {userTypesDeleteManyArgs} args - Arguments to filter UserTypes to delete.
     * @example
     * // Delete a few UserTypes
     * const { count } = await prisma.userTypes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userTypesDeleteManyArgs>(args?: SelectSubset<T, userTypesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userTypesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserTypes
     * const userTypes = await prisma.userTypes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userTypesUpdateManyArgs>(args: SelectSubset<T, userTypesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserTypes and returns the data updated in the database.
     * @param {userTypesUpdateManyAndReturnArgs} args - Arguments to update many UserTypes.
     * @example
     * // Update many UserTypes
     * const userTypes = await prisma.userTypes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserTypes and only return the `id`
     * const userTypesWithIdOnly = await prisma.userTypes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends userTypesUpdateManyAndReturnArgs>(args: SelectSubset<T, userTypesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userTypesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserTypes.
     * @param {userTypesUpsertArgs} args - Arguments to update or create a UserTypes.
     * @example
     * // Update or create a UserTypes
     * const userTypes = await prisma.userTypes.upsert({
     *   create: {
     *     // ... data to create a UserTypes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserTypes we want to update
     *   }
     * })
     */
    upsert<T extends userTypesUpsertArgs>(args: SelectSubset<T, userTypesUpsertArgs<ExtArgs>>): Prisma__userTypesClient<$Result.GetResult<Prisma.$userTypesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userTypesCountArgs} args - Arguments to filter UserTypes to count.
     * @example
     * // Count the number of UserTypes
     * const count = await prisma.userTypes.count({
     *   where: {
     *     // ... the filter for the UserTypes we want to count
     *   }
     * })
    **/
    count<T extends userTypesCountArgs>(
      args?: Subset<T, userTypesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserTypesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTypesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserTypesAggregateArgs>(args: Subset<T, UserTypesAggregateArgs>): Prisma.PrismaPromise<GetUserTypesAggregateType<T>>

    /**
     * Group by UserTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userTypesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userTypesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userTypesGroupByArgs['orderBy'] }
        : { orderBy?: userTypesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userTypesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserTypesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the userTypes model
   */
  readonly fields: userTypesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for userTypes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userTypesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends userTypes$usersArgs<ExtArgs> = {}>(args?: Subset<T, userTypes$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_userTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the userTypes model
   */
  interface userTypesFieldRefs {
    readonly id: FieldRef<"userTypes", 'Int'>
    readonly userTypeName: FieldRef<"userTypes", 'String'>
    readonly createdAt: FieldRef<"userTypes", 'DateTime'>
    readonly isActive: FieldRef<"userTypes", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * userTypes findUnique
   */
  export type userTypesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userTypes
     */
    select?: userTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userTypes
     */
    omit?: userTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userTypesInclude<ExtArgs> | null
    /**
     * Filter, which userTypes to fetch.
     */
    where: userTypesWhereUniqueInput
  }

  /**
   * userTypes findUniqueOrThrow
   */
  export type userTypesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userTypes
     */
    select?: userTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userTypes
     */
    omit?: userTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userTypesInclude<ExtArgs> | null
    /**
     * Filter, which userTypes to fetch.
     */
    where: userTypesWhereUniqueInput
  }

  /**
   * userTypes findFirst
   */
  export type userTypesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userTypes
     */
    select?: userTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userTypes
     */
    omit?: userTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userTypesInclude<ExtArgs> | null
    /**
     * Filter, which userTypes to fetch.
     */
    where?: userTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userTypes to fetch.
     */
    orderBy?: userTypesOrderByWithRelationInput | userTypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userTypes.
     */
    cursor?: userTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userTypes.
     */
    distinct?: UserTypesScalarFieldEnum | UserTypesScalarFieldEnum[]
  }

  /**
   * userTypes findFirstOrThrow
   */
  export type userTypesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userTypes
     */
    select?: userTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userTypes
     */
    omit?: userTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userTypesInclude<ExtArgs> | null
    /**
     * Filter, which userTypes to fetch.
     */
    where?: userTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userTypes to fetch.
     */
    orderBy?: userTypesOrderByWithRelationInput | userTypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userTypes.
     */
    cursor?: userTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userTypes.
     */
    distinct?: UserTypesScalarFieldEnum | UserTypesScalarFieldEnum[]
  }

  /**
   * userTypes findMany
   */
  export type userTypesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userTypes
     */
    select?: userTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userTypes
     */
    omit?: userTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userTypesInclude<ExtArgs> | null
    /**
     * Filter, which userTypes to fetch.
     */
    where?: userTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userTypes to fetch.
     */
    orderBy?: userTypesOrderByWithRelationInput | userTypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing userTypes.
     */
    cursor?: userTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userTypes.
     */
    skip?: number
    distinct?: UserTypesScalarFieldEnum | UserTypesScalarFieldEnum[]
  }

  /**
   * userTypes create
   */
  export type userTypesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userTypes
     */
    select?: userTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userTypes
     */
    omit?: userTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userTypesInclude<ExtArgs> | null
    /**
     * The data needed to create a userTypes.
     */
    data: XOR<userTypesCreateInput, userTypesUncheckedCreateInput>
  }

  /**
   * userTypes createMany
   */
  export type userTypesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many userTypes.
     */
    data: userTypesCreateManyInput | userTypesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * userTypes createManyAndReturn
   */
  export type userTypesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userTypes
     */
    select?: userTypesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the userTypes
     */
    omit?: userTypesOmit<ExtArgs> | null
    /**
     * The data used to create many userTypes.
     */
    data: userTypesCreateManyInput | userTypesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * userTypes update
   */
  export type userTypesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userTypes
     */
    select?: userTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userTypes
     */
    omit?: userTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userTypesInclude<ExtArgs> | null
    /**
     * The data needed to update a userTypes.
     */
    data: XOR<userTypesUpdateInput, userTypesUncheckedUpdateInput>
    /**
     * Choose, which userTypes to update.
     */
    where: userTypesWhereUniqueInput
  }

  /**
   * userTypes updateMany
   */
  export type userTypesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update userTypes.
     */
    data: XOR<userTypesUpdateManyMutationInput, userTypesUncheckedUpdateManyInput>
    /**
     * Filter which userTypes to update
     */
    where?: userTypesWhereInput
    /**
     * Limit how many userTypes to update.
     */
    limit?: number
  }

  /**
   * userTypes updateManyAndReturn
   */
  export type userTypesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userTypes
     */
    select?: userTypesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the userTypes
     */
    omit?: userTypesOmit<ExtArgs> | null
    /**
     * The data used to update userTypes.
     */
    data: XOR<userTypesUpdateManyMutationInput, userTypesUncheckedUpdateManyInput>
    /**
     * Filter which userTypes to update
     */
    where?: userTypesWhereInput
    /**
     * Limit how many userTypes to update.
     */
    limit?: number
  }

  /**
   * userTypes upsert
   */
  export type userTypesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userTypes
     */
    select?: userTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userTypes
     */
    omit?: userTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userTypesInclude<ExtArgs> | null
    /**
     * The filter to search for the userTypes to update in case it exists.
     */
    where: userTypesWhereUniqueInput
    /**
     * In case the userTypes found by the `where` argument doesn't exist, create a new userTypes with this data.
     */
    create: XOR<userTypesCreateInput, userTypesUncheckedCreateInput>
    /**
     * In case the userTypes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userTypesUpdateInput, userTypesUncheckedUpdateInput>
  }

  /**
   * userTypes delete
   */
  export type userTypesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userTypes
     */
    select?: userTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userTypes
     */
    omit?: userTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userTypesInclude<ExtArgs> | null
    /**
     * Filter which userTypes to delete.
     */
    where: userTypesWhereUniqueInput
  }

  /**
   * userTypes deleteMany
   */
  export type userTypesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which userTypes to delete
     */
    where?: userTypesWhereInput
    /**
     * Limit how many userTypes to delete.
     */
    limit?: number
  }

  /**
   * userTypes.users
   */
  export type userTypes$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_userType
     */
    select?: user_userTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_userType
     */
    omit?: user_userTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_userTypeInclude<ExtArgs> | null
    where?: user_userTypeWhereInput
    orderBy?: user_userTypeOrderByWithRelationInput | user_userTypeOrderByWithRelationInput[]
    cursor?: user_userTypeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_userTypeScalarFieldEnum | User_userTypeScalarFieldEnum[]
  }

  /**
   * userTypes without action
   */
  export type userTypesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userTypes
     */
    select?: userTypesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userTypes
     */
    omit?: userTypesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userTypesInclude<ExtArgs> | null
  }


  /**
   * Model user_userType
   */

  export type AggregateUser_userType = {
    _count: User_userTypeCountAggregateOutputType | null
    _avg: User_userTypeAvgAggregateOutputType | null
    _sum: User_userTypeSumAggregateOutputType | null
    _min: User_userTypeMinAggregateOutputType | null
    _max: User_userTypeMaxAggregateOutputType | null
  }

  export type User_userTypeAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    usertypeId: number | null
  }

  export type User_userTypeSumAggregateOutputType = {
    id: number | null
    userId: number | null
    usertypeId: number | null
  }

  export type User_userTypeMinAggregateOutputType = {
    id: number | null
    userId: number | null
    usertypeId: number | null
  }

  export type User_userTypeMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    usertypeId: number | null
  }

  export type User_userTypeCountAggregateOutputType = {
    id: number
    userId: number
    usertypeId: number
    _all: number
  }


  export type User_userTypeAvgAggregateInputType = {
    id?: true
    userId?: true
    usertypeId?: true
  }

  export type User_userTypeSumAggregateInputType = {
    id?: true
    userId?: true
    usertypeId?: true
  }

  export type User_userTypeMinAggregateInputType = {
    id?: true
    userId?: true
    usertypeId?: true
  }

  export type User_userTypeMaxAggregateInputType = {
    id?: true
    userId?: true
    usertypeId?: true
  }

  export type User_userTypeCountAggregateInputType = {
    id?: true
    userId?: true
    usertypeId?: true
    _all?: true
  }

  export type User_userTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_userType to aggregate.
     */
    where?: user_userTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_userTypes to fetch.
     */
    orderBy?: user_userTypeOrderByWithRelationInput | user_userTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_userTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_userTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_userTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_userTypes
    **/
    _count?: true | User_userTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_userTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_userTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_userTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_userTypeMaxAggregateInputType
  }

  export type GetUser_userTypeAggregateType<T extends User_userTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_userType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_userType[P]>
      : GetScalarType<T[P], AggregateUser_userType[P]>
  }




  export type user_userTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_userTypeWhereInput
    orderBy?: user_userTypeOrderByWithAggregationInput | user_userTypeOrderByWithAggregationInput[]
    by: User_userTypeScalarFieldEnum[] | User_userTypeScalarFieldEnum
    having?: user_userTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_userTypeCountAggregateInputType | true
    _avg?: User_userTypeAvgAggregateInputType
    _sum?: User_userTypeSumAggregateInputType
    _min?: User_userTypeMinAggregateInputType
    _max?: User_userTypeMaxAggregateInputType
  }

  export type User_userTypeGroupByOutputType = {
    id: number
    userId: number
    usertypeId: number
    _count: User_userTypeCountAggregateOutputType | null
    _avg: User_userTypeAvgAggregateOutputType | null
    _sum: User_userTypeSumAggregateOutputType | null
    _min: User_userTypeMinAggregateOutputType | null
    _max: User_userTypeMaxAggregateOutputType | null
  }

  type GetUser_userTypeGroupByPayload<T extends user_userTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_userTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_userTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_userTypeGroupByOutputType[P]>
            : GetScalarType<T[P], User_userTypeGroupByOutputType[P]>
        }
      >
    >


  export type user_userTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    usertypeId?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    userType?: boolean | userTypesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_userType"]>

  export type user_userTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    usertypeId?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    userType?: boolean | userTypesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_userType"]>

  export type user_userTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    usertypeId?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    userType?: boolean | userTypesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_userType"]>

  export type user_userTypeSelectScalar = {
    id?: boolean
    userId?: boolean
    usertypeId?: boolean
  }

  export type user_userTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "usertypeId", ExtArgs["result"]["user_userType"]>
  export type user_userTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    userType?: boolean | userTypesDefaultArgs<ExtArgs>
  }
  export type user_userTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    userType?: boolean | userTypesDefaultArgs<ExtArgs>
  }
  export type user_userTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    userType?: boolean | userTypesDefaultArgs<ExtArgs>
  }

  export type $user_userTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_userType"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      userType: Prisma.$userTypesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      usertypeId: number
    }, ExtArgs["result"]["user_userType"]>
    composites: {}
  }

  type user_userTypeGetPayload<S extends boolean | null | undefined | user_userTypeDefaultArgs> = $Result.GetResult<Prisma.$user_userTypePayload, S>

  type user_userTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_userTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_userTypeCountAggregateInputType | true
    }

  export interface user_userTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_userType'], meta: { name: 'user_userType' } }
    /**
     * Find zero or one User_userType that matches the filter.
     * @param {user_userTypeFindUniqueArgs} args - Arguments to find a User_userType
     * @example
     * // Get one User_userType
     * const user_userType = await prisma.user_userType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_userTypeFindUniqueArgs>(args: SelectSubset<T, user_userTypeFindUniqueArgs<ExtArgs>>): Prisma__user_userTypeClient<$Result.GetResult<Prisma.$user_userTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_userType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_userTypeFindUniqueOrThrowArgs} args - Arguments to find a User_userType
     * @example
     * // Get one User_userType
     * const user_userType = await prisma.user_userType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_userTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, user_userTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_userTypeClient<$Result.GetResult<Prisma.$user_userTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_userType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_userTypeFindFirstArgs} args - Arguments to find a User_userType
     * @example
     * // Get one User_userType
     * const user_userType = await prisma.user_userType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_userTypeFindFirstArgs>(args?: SelectSubset<T, user_userTypeFindFirstArgs<ExtArgs>>): Prisma__user_userTypeClient<$Result.GetResult<Prisma.$user_userTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_userType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_userTypeFindFirstOrThrowArgs} args - Arguments to find a User_userType
     * @example
     * // Get one User_userType
     * const user_userType = await prisma.user_userType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_userTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, user_userTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_userTypeClient<$Result.GetResult<Prisma.$user_userTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_userTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_userTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_userTypes
     * const user_userTypes = await prisma.user_userType.findMany()
     * 
     * // Get first 10 User_userTypes
     * const user_userTypes = await prisma.user_userType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_userTypeWithIdOnly = await prisma.user_userType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends user_userTypeFindManyArgs>(args?: SelectSubset<T, user_userTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_userTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_userType.
     * @param {user_userTypeCreateArgs} args - Arguments to create a User_userType.
     * @example
     * // Create one User_userType
     * const User_userType = await prisma.user_userType.create({
     *   data: {
     *     // ... data to create a User_userType
     *   }
     * })
     * 
     */
    create<T extends user_userTypeCreateArgs>(args: SelectSubset<T, user_userTypeCreateArgs<ExtArgs>>): Prisma__user_userTypeClient<$Result.GetResult<Prisma.$user_userTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_userTypes.
     * @param {user_userTypeCreateManyArgs} args - Arguments to create many User_userTypes.
     * @example
     * // Create many User_userTypes
     * const user_userType = await prisma.user_userType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_userTypeCreateManyArgs>(args?: SelectSubset<T, user_userTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_userTypes and returns the data saved in the database.
     * @param {user_userTypeCreateManyAndReturnArgs} args - Arguments to create many User_userTypes.
     * @example
     * // Create many User_userTypes
     * const user_userType = await prisma.user_userType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_userTypes and only return the `id`
     * const user_userTypeWithIdOnly = await prisma.user_userType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_userTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, user_userTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_userTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_userType.
     * @param {user_userTypeDeleteArgs} args - Arguments to delete one User_userType.
     * @example
     * // Delete one User_userType
     * const User_userType = await prisma.user_userType.delete({
     *   where: {
     *     // ... filter to delete one User_userType
     *   }
     * })
     * 
     */
    delete<T extends user_userTypeDeleteArgs>(args: SelectSubset<T, user_userTypeDeleteArgs<ExtArgs>>): Prisma__user_userTypeClient<$Result.GetResult<Prisma.$user_userTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_userType.
     * @param {user_userTypeUpdateArgs} args - Arguments to update one User_userType.
     * @example
     * // Update one User_userType
     * const user_userType = await prisma.user_userType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_userTypeUpdateArgs>(args: SelectSubset<T, user_userTypeUpdateArgs<ExtArgs>>): Prisma__user_userTypeClient<$Result.GetResult<Prisma.$user_userTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_userTypes.
     * @param {user_userTypeDeleteManyArgs} args - Arguments to filter User_userTypes to delete.
     * @example
     * // Delete a few User_userTypes
     * const { count } = await prisma.user_userType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_userTypeDeleteManyArgs>(args?: SelectSubset<T, user_userTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_userTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_userTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_userTypes
     * const user_userType = await prisma.user_userType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_userTypeUpdateManyArgs>(args: SelectSubset<T, user_userTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_userTypes and returns the data updated in the database.
     * @param {user_userTypeUpdateManyAndReturnArgs} args - Arguments to update many User_userTypes.
     * @example
     * // Update many User_userTypes
     * const user_userType = await prisma.user_userType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_userTypes and only return the `id`
     * const user_userTypeWithIdOnly = await prisma.user_userType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends user_userTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, user_userTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_userTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_userType.
     * @param {user_userTypeUpsertArgs} args - Arguments to update or create a User_userType.
     * @example
     * // Update or create a User_userType
     * const user_userType = await prisma.user_userType.upsert({
     *   create: {
     *     // ... data to create a User_userType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_userType we want to update
     *   }
     * })
     */
    upsert<T extends user_userTypeUpsertArgs>(args: SelectSubset<T, user_userTypeUpsertArgs<ExtArgs>>): Prisma__user_userTypeClient<$Result.GetResult<Prisma.$user_userTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_userTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_userTypeCountArgs} args - Arguments to filter User_userTypes to count.
     * @example
     * // Count the number of User_userTypes
     * const count = await prisma.user_userType.count({
     *   where: {
     *     // ... the filter for the User_userTypes we want to count
     *   }
     * })
    **/
    count<T extends user_userTypeCountArgs>(
      args?: Subset<T, user_userTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_userTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_userType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_userTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_userTypeAggregateArgs>(args: Subset<T, User_userTypeAggregateArgs>): Prisma.PrismaPromise<GetUser_userTypeAggregateType<T>>

    /**
     * Group by User_userType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_userTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends user_userTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_userTypeGroupByArgs['orderBy'] }
        : { orderBy?: user_userTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, user_userTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_userTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_userType model
   */
  readonly fields: user_userTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_userType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_userTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    userType<T extends userTypesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userTypesDefaultArgs<ExtArgs>>): Prisma__userTypesClient<$Result.GetResult<Prisma.$userTypesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user_userType model
   */
  interface user_userTypeFieldRefs {
    readonly id: FieldRef<"user_userType", 'Int'>
    readonly userId: FieldRef<"user_userType", 'Int'>
    readonly usertypeId: FieldRef<"user_userType", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * user_userType findUnique
   */
  export type user_userTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_userType
     */
    select?: user_userTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_userType
     */
    omit?: user_userTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_userTypeInclude<ExtArgs> | null
    /**
     * Filter, which user_userType to fetch.
     */
    where: user_userTypeWhereUniqueInput
  }

  /**
   * user_userType findUniqueOrThrow
   */
  export type user_userTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_userType
     */
    select?: user_userTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_userType
     */
    omit?: user_userTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_userTypeInclude<ExtArgs> | null
    /**
     * Filter, which user_userType to fetch.
     */
    where: user_userTypeWhereUniqueInput
  }

  /**
   * user_userType findFirst
   */
  export type user_userTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_userType
     */
    select?: user_userTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_userType
     */
    omit?: user_userTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_userTypeInclude<ExtArgs> | null
    /**
     * Filter, which user_userType to fetch.
     */
    where?: user_userTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_userTypes to fetch.
     */
    orderBy?: user_userTypeOrderByWithRelationInput | user_userTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_userTypes.
     */
    cursor?: user_userTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_userTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_userTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_userTypes.
     */
    distinct?: User_userTypeScalarFieldEnum | User_userTypeScalarFieldEnum[]
  }

  /**
   * user_userType findFirstOrThrow
   */
  export type user_userTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_userType
     */
    select?: user_userTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_userType
     */
    omit?: user_userTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_userTypeInclude<ExtArgs> | null
    /**
     * Filter, which user_userType to fetch.
     */
    where?: user_userTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_userTypes to fetch.
     */
    orderBy?: user_userTypeOrderByWithRelationInput | user_userTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_userTypes.
     */
    cursor?: user_userTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_userTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_userTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_userTypes.
     */
    distinct?: User_userTypeScalarFieldEnum | User_userTypeScalarFieldEnum[]
  }

  /**
   * user_userType findMany
   */
  export type user_userTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_userType
     */
    select?: user_userTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_userType
     */
    omit?: user_userTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_userTypeInclude<ExtArgs> | null
    /**
     * Filter, which user_userTypes to fetch.
     */
    where?: user_userTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_userTypes to fetch.
     */
    orderBy?: user_userTypeOrderByWithRelationInput | user_userTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_userTypes.
     */
    cursor?: user_userTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_userTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_userTypes.
     */
    skip?: number
    distinct?: User_userTypeScalarFieldEnum | User_userTypeScalarFieldEnum[]
  }

  /**
   * user_userType create
   */
  export type user_userTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_userType
     */
    select?: user_userTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_userType
     */
    omit?: user_userTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_userTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a user_userType.
     */
    data: XOR<user_userTypeCreateInput, user_userTypeUncheckedCreateInput>
  }

  /**
   * user_userType createMany
   */
  export type user_userTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_userTypes.
     */
    data: user_userTypeCreateManyInput | user_userTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_userType createManyAndReturn
   */
  export type user_userTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_userType
     */
    select?: user_userTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_userType
     */
    omit?: user_userTypeOmit<ExtArgs> | null
    /**
     * The data used to create many user_userTypes.
     */
    data: user_userTypeCreateManyInput | user_userTypeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_userTypeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_userType update
   */
  export type user_userTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_userType
     */
    select?: user_userTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_userType
     */
    omit?: user_userTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_userTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a user_userType.
     */
    data: XOR<user_userTypeUpdateInput, user_userTypeUncheckedUpdateInput>
    /**
     * Choose, which user_userType to update.
     */
    where: user_userTypeWhereUniqueInput
  }

  /**
   * user_userType updateMany
   */
  export type user_userTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_userTypes.
     */
    data: XOR<user_userTypeUpdateManyMutationInput, user_userTypeUncheckedUpdateManyInput>
    /**
     * Filter which user_userTypes to update
     */
    where?: user_userTypeWhereInput
    /**
     * Limit how many user_userTypes to update.
     */
    limit?: number
  }

  /**
   * user_userType updateManyAndReturn
   */
  export type user_userTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_userType
     */
    select?: user_userTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_userType
     */
    omit?: user_userTypeOmit<ExtArgs> | null
    /**
     * The data used to update user_userTypes.
     */
    data: XOR<user_userTypeUpdateManyMutationInput, user_userTypeUncheckedUpdateManyInput>
    /**
     * Filter which user_userTypes to update
     */
    where?: user_userTypeWhereInput
    /**
     * Limit how many user_userTypes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_userTypeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_userType upsert
   */
  export type user_userTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_userType
     */
    select?: user_userTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_userType
     */
    omit?: user_userTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_userTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the user_userType to update in case it exists.
     */
    where: user_userTypeWhereUniqueInput
    /**
     * In case the user_userType found by the `where` argument doesn't exist, create a new user_userType with this data.
     */
    create: XOR<user_userTypeCreateInput, user_userTypeUncheckedCreateInput>
    /**
     * In case the user_userType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_userTypeUpdateInput, user_userTypeUncheckedUpdateInput>
  }

  /**
   * user_userType delete
   */
  export type user_userTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_userType
     */
    select?: user_userTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_userType
     */
    omit?: user_userTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_userTypeInclude<ExtArgs> | null
    /**
     * Filter which user_userType to delete.
     */
    where: user_userTypeWhereUniqueInput
  }

  /**
   * user_userType deleteMany
   */
  export type user_userTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_userTypes to delete
     */
    where?: user_userTypeWhereInput
    /**
     * Limit how many user_userTypes to delete.
     */
    limit?: number
  }

  /**
   * user_userType without action
   */
  export type user_userTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_userType
     */
    select?: user_userTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_userType
     */
    omit?: user_userTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_userTypeInclude<ExtArgs> | null
  }


  /**
   * Model userRole
   */

  export type AggregateUserRole = {
    _count: UserRoleCountAggregateOutputType | null
    _avg: UserRoleAvgAggregateOutputType | null
    _sum: UserRoleSumAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  export type UserRoleAvgAggregateOutputType = {
    id: number | null
  }

  export type UserRoleSumAggregateOutputType = {
    id: number | null
  }

  export type UserRoleMinAggregateOutputType = {
    id: number | null
    userRoleName: string | null
    createdAt: Date | null
    isActive: boolean | null
  }

  export type UserRoleMaxAggregateOutputType = {
    id: number | null
    userRoleName: string | null
    createdAt: Date | null
    isActive: boolean | null
  }

  export type UserRoleCountAggregateOutputType = {
    id: number
    userRoleName: number
    createdAt: number
    isActive: number
    _all: number
  }


  export type UserRoleAvgAggregateInputType = {
    id?: true
  }

  export type UserRoleSumAggregateInputType = {
    id?: true
  }

  export type UserRoleMinAggregateInputType = {
    id?: true
    userRoleName?: true
    createdAt?: true
    isActive?: true
  }

  export type UserRoleMaxAggregateInputType = {
    id?: true
    userRoleName?: true
    createdAt?: true
    isActive?: true
  }

  export type UserRoleCountAggregateInputType = {
    id?: true
    userRoleName?: true
    createdAt?: true
    isActive?: true
    _all?: true
  }

  export type UserRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which userRole to aggregate.
     */
    where?: userRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userRoles to fetch.
     */
    orderBy?: userRoleOrderByWithRelationInput | userRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned userRoles
    **/
    _count?: true | UserRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserRoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserRoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserRoleMaxAggregateInputType
  }

  export type GetUserRoleAggregateType<T extends UserRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateUserRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserRole[P]>
      : GetScalarType<T[P], AggregateUserRole[P]>
  }




  export type userRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userRoleWhereInput
    orderBy?: userRoleOrderByWithAggregationInput | userRoleOrderByWithAggregationInput[]
    by: UserRoleScalarFieldEnum[] | UserRoleScalarFieldEnum
    having?: userRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserRoleCountAggregateInputType | true
    _avg?: UserRoleAvgAggregateInputType
    _sum?: UserRoleSumAggregateInputType
    _min?: UserRoleMinAggregateInputType
    _max?: UserRoleMaxAggregateInputType
  }

  export type UserRoleGroupByOutputType = {
    id: number
    userRoleName: string
    createdAt: Date
    isActive: boolean
    _count: UserRoleCountAggregateOutputType | null
    _avg: UserRoleAvgAggregateOutputType | null
    _sum: UserRoleSumAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  type GetUserRoleGroupByPayload<T extends userRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
            : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
        }
      >
    >


  export type userRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userRoleName?: boolean
    createdAt?: boolean
    isActive?: boolean
    users?: boolean | userRole$usersArgs<ExtArgs>
    _count?: boolean | UserRoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRole"]>

  export type userRoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userRoleName?: boolean
    createdAt?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["userRole"]>

  export type userRoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userRoleName?: boolean
    createdAt?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["userRole"]>

  export type userRoleSelectScalar = {
    id?: boolean
    userRoleName?: boolean
    createdAt?: boolean
    isActive?: boolean
  }

  export type userRoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userRoleName" | "createdAt" | "isActive", ExtArgs["result"]["userRole"]>
  export type userRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | userRole$usersArgs<ExtArgs>
    _count?: boolean | UserRoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userRoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type userRoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $userRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "userRole"
    objects: {
      users: Prisma.$user_userRolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userRoleName: string
      createdAt: Date
      isActive: boolean
    }, ExtArgs["result"]["userRole"]>
    composites: {}
  }

  type userRoleGetPayload<S extends boolean | null | undefined | userRoleDefaultArgs> = $Result.GetResult<Prisma.$userRolePayload, S>

  type userRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userRoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserRoleCountAggregateInputType | true
    }

  export interface userRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['userRole'], meta: { name: 'userRole' } }
    /**
     * Find zero or one UserRole that matches the filter.
     * @param {userRoleFindUniqueArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userRoleFindUniqueArgs>(args: SelectSubset<T, userRoleFindUniqueArgs<ExtArgs>>): Prisma__userRoleClient<$Result.GetResult<Prisma.$userRolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserRole that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userRoleFindUniqueOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, userRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userRoleClient<$Result.GetResult<Prisma.$userRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userRoleFindFirstArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userRoleFindFirstArgs>(args?: SelectSubset<T, userRoleFindFirstArgs<ExtArgs>>): Prisma__userRoleClient<$Result.GetResult<Prisma.$userRolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userRoleFindFirstOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, userRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__userRoleClient<$Result.GetResult<Prisma.$userRolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserRoles
     * const userRoles = await prisma.userRole.findMany()
     * 
     * // Get first 10 UserRoles
     * const userRoles = await prisma.userRole.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userRoleWithIdOnly = await prisma.userRole.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userRoleFindManyArgs>(args?: SelectSubset<T, userRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserRole.
     * @param {userRoleCreateArgs} args - Arguments to create a UserRole.
     * @example
     * // Create one UserRole
     * const UserRole = await prisma.userRole.create({
     *   data: {
     *     // ... data to create a UserRole
     *   }
     * })
     * 
     */
    create<T extends userRoleCreateArgs>(args: SelectSubset<T, userRoleCreateArgs<ExtArgs>>): Prisma__userRoleClient<$Result.GetResult<Prisma.$userRolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserRoles.
     * @param {userRoleCreateManyArgs} args - Arguments to create many UserRoles.
     * @example
     * // Create many UserRoles
     * const userRole = await prisma.userRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userRoleCreateManyArgs>(args?: SelectSubset<T, userRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserRoles and returns the data saved in the database.
     * @param {userRoleCreateManyAndReturnArgs} args - Arguments to create many UserRoles.
     * @example
     * // Create many UserRoles
     * const userRole = await prisma.userRole.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserRoles and only return the `id`
     * const userRoleWithIdOnly = await prisma.userRole.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userRoleCreateManyAndReturnArgs>(args?: SelectSubset<T, userRoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userRolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserRole.
     * @param {userRoleDeleteArgs} args - Arguments to delete one UserRole.
     * @example
     * // Delete one UserRole
     * const UserRole = await prisma.userRole.delete({
     *   where: {
     *     // ... filter to delete one UserRole
     *   }
     * })
     * 
     */
    delete<T extends userRoleDeleteArgs>(args: SelectSubset<T, userRoleDeleteArgs<ExtArgs>>): Prisma__userRoleClient<$Result.GetResult<Prisma.$userRolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserRole.
     * @param {userRoleUpdateArgs} args - Arguments to update one UserRole.
     * @example
     * // Update one UserRole
     * const userRole = await prisma.userRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userRoleUpdateArgs>(args: SelectSubset<T, userRoleUpdateArgs<ExtArgs>>): Prisma__userRoleClient<$Result.GetResult<Prisma.$userRolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserRoles.
     * @param {userRoleDeleteManyArgs} args - Arguments to filter UserRoles to delete.
     * @example
     * // Delete a few UserRoles
     * const { count } = await prisma.userRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userRoleDeleteManyArgs>(args?: SelectSubset<T, userRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserRoles
     * const userRole = await prisma.userRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userRoleUpdateManyArgs>(args: SelectSubset<T, userRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRoles and returns the data updated in the database.
     * @param {userRoleUpdateManyAndReturnArgs} args - Arguments to update many UserRoles.
     * @example
     * // Update many UserRoles
     * const userRole = await prisma.userRole.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserRoles and only return the `id`
     * const userRoleWithIdOnly = await prisma.userRole.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends userRoleUpdateManyAndReturnArgs>(args: SelectSubset<T, userRoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userRolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserRole.
     * @param {userRoleUpsertArgs} args - Arguments to update or create a UserRole.
     * @example
     * // Update or create a UserRole
     * const userRole = await prisma.userRole.upsert({
     *   create: {
     *     // ... data to create a UserRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserRole we want to update
     *   }
     * })
     */
    upsert<T extends userRoleUpsertArgs>(args: SelectSubset<T, userRoleUpsertArgs<ExtArgs>>): Prisma__userRoleClient<$Result.GetResult<Prisma.$userRolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userRoleCountArgs} args - Arguments to filter UserRoles to count.
     * @example
     * // Count the number of UserRoles
     * const count = await prisma.userRole.count({
     *   where: {
     *     // ... the filter for the UserRoles we want to count
     *   }
     * })
    **/
    count<T extends userRoleCountArgs>(
      args?: Subset<T, userRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserRoleAggregateArgs>(args: Subset<T, UserRoleAggregateArgs>): Prisma.PrismaPromise<GetUserRoleAggregateType<T>>

    /**
     * Group by UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userRoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userRoleGroupByArgs['orderBy'] }
        : { orderBy?: userRoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the userRole model
   */
  readonly fields: userRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for userRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends userRole$usersArgs<ExtArgs> = {}>(args?: Subset<T, userRole$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_userRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the userRole model
   */
  interface userRoleFieldRefs {
    readonly id: FieldRef<"userRole", 'Int'>
    readonly userRoleName: FieldRef<"userRole", 'String'>
    readonly createdAt: FieldRef<"userRole", 'DateTime'>
    readonly isActive: FieldRef<"userRole", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * userRole findUnique
   */
  export type userRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userRole
     */
    select?: userRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userRole
     */
    omit?: userRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userRoleInclude<ExtArgs> | null
    /**
     * Filter, which userRole to fetch.
     */
    where: userRoleWhereUniqueInput
  }

  /**
   * userRole findUniqueOrThrow
   */
  export type userRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userRole
     */
    select?: userRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userRole
     */
    omit?: userRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userRoleInclude<ExtArgs> | null
    /**
     * Filter, which userRole to fetch.
     */
    where: userRoleWhereUniqueInput
  }

  /**
   * userRole findFirst
   */
  export type userRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userRole
     */
    select?: userRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userRole
     */
    omit?: userRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userRoleInclude<ExtArgs> | null
    /**
     * Filter, which userRole to fetch.
     */
    where?: userRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userRoles to fetch.
     */
    orderBy?: userRoleOrderByWithRelationInput | userRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userRoles.
     */
    cursor?: userRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * userRole findFirstOrThrow
   */
  export type userRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userRole
     */
    select?: userRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userRole
     */
    omit?: userRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userRoleInclude<ExtArgs> | null
    /**
     * Filter, which userRole to fetch.
     */
    where?: userRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userRoles to fetch.
     */
    orderBy?: userRoleOrderByWithRelationInput | userRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userRoles.
     */
    cursor?: userRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * userRole findMany
   */
  export type userRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userRole
     */
    select?: userRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userRole
     */
    omit?: userRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userRoleInclude<ExtArgs> | null
    /**
     * Filter, which userRoles to fetch.
     */
    where?: userRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userRoles to fetch.
     */
    orderBy?: userRoleOrderByWithRelationInput | userRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing userRoles.
     */
    cursor?: userRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userRoles.
     */
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * userRole create
   */
  export type userRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userRole
     */
    select?: userRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userRole
     */
    omit?: userRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a userRole.
     */
    data: XOR<userRoleCreateInput, userRoleUncheckedCreateInput>
  }

  /**
   * userRole createMany
   */
  export type userRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many userRoles.
     */
    data: userRoleCreateManyInput | userRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * userRole createManyAndReturn
   */
  export type userRoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userRole
     */
    select?: userRoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the userRole
     */
    omit?: userRoleOmit<ExtArgs> | null
    /**
     * The data used to create many userRoles.
     */
    data: userRoleCreateManyInput | userRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * userRole update
   */
  export type userRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userRole
     */
    select?: userRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userRole
     */
    omit?: userRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a userRole.
     */
    data: XOR<userRoleUpdateInput, userRoleUncheckedUpdateInput>
    /**
     * Choose, which userRole to update.
     */
    where: userRoleWhereUniqueInput
  }

  /**
   * userRole updateMany
   */
  export type userRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update userRoles.
     */
    data: XOR<userRoleUpdateManyMutationInput, userRoleUncheckedUpdateManyInput>
    /**
     * Filter which userRoles to update
     */
    where?: userRoleWhereInput
    /**
     * Limit how many userRoles to update.
     */
    limit?: number
  }

  /**
   * userRole updateManyAndReturn
   */
  export type userRoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userRole
     */
    select?: userRoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the userRole
     */
    omit?: userRoleOmit<ExtArgs> | null
    /**
     * The data used to update userRoles.
     */
    data: XOR<userRoleUpdateManyMutationInput, userRoleUncheckedUpdateManyInput>
    /**
     * Filter which userRoles to update
     */
    where?: userRoleWhereInput
    /**
     * Limit how many userRoles to update.
     */
    limit?: number
  }

  /**
   * userRole upsert
   */
  export type userRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userRole
     */
    select?: userRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userRole
     */
    omit?: userRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the userRole to update in case it exists.
     */
    where: userRoleWhereUniqueInput
    /**
     * In case the userRole found by the `where` argument doesn't exist, create a new userRole with this data.
     */
    create: XOR<userRoleCreateInput, userRoleUncheckedCreateInput>
    /**
     * In case the userRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userRoleUpdateInput, userRoleUncheckedUpdateInput>
  }

  /**
   * userRole delete
   */
  export type userRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userRole
     */
    select?: userRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userRole
     */
    omit?: userRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userRoleInclude<ExtArgs> | null
    /**
     * Filter which userRole to delete.
     */
    where: userRoleWhereUniqueInput
  }

  /**
   * userRole deleteMany
   */
  export type userRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which userRoles to delete
     */
    where?: userRoleWhereInput
    /**
     * Limit how many userRoles to delete.
     */
    limit?: number
  }

  /**
   * userRole.users
   */
  export type userRole$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_userRole
     */
    select?: user_userRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_userRole
     */
    omit?: user_userRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_userRoleInclude<ExtArgs> | null
    where?: user_userRoleWhereInput
    orderBy?: user_userRoleOrderByWithRelationInput | user_userRoleOrderByWithRelationInput[]
    cursor?: user_userRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_userRoleScalarFieldEnum | User_userRoleScalarFieldEnum[]
  }

  /**
   * userRole without action
   */
  export type userRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userRole
     */
    select?: userRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userRole
     */
    omit?: userRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userRoleInclude<ExtArgs> | null
  }


  /**
   * Model user_userRole
   */

  export type AggregateUser_userRole = {
    _count: User_userRoleCountAggregateOutputType | null
    _avg: User_userRoleAvgAggregateOutputType | null
    _sum: User_userRoleSumAggregateOutputType | null
    _min: User_userRoleMinAggregateOutputType | null
    _max: User_userRoleMaxAggregateOutputType | null
  }

  export type User_userRoleAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    userRoleId: number | null
  }

  export type User_userRoleSumAggregateOutputType = {
    id: number | null
    userId: number | null
    userRoleId: number | null
  }

  export type User_userRoleMinAggregateOutputType = {
    id: number | null
    userId: number | null
    userRoleId: number | null
  }

  export type User_userRoleMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    userRoleId: number | null
  }

  export type User_userRoleCountAggregateOutputType = {
    id: number
    userId: number
    userRoleId: number
    _all: number
  }


  export type User_userRoleAvgAggregateInputType = {
    id?: true
    userId?: true
    userRoleId?: true
  }

  export type User_userRoleSumAggregateInputType = {
    id?: true
    userId?: true
    userRoleId?: true
  }

  export type User_userRoleMinAggregateInputType = {
    id?: true
    userId?: true
    userRoleId?: true
  }

  export type User_userRoleMaxAggregateInputType = {
    id?: true
    userId?: true
    userRoleId?: true
  }

  export type User_userRoleCountAggregateInputType = {
    id?: true
    userId?: true
    userRoleId?: true
    _all?: true
  }

  export type User_userRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_userRole to aggregate.
     */
    where?: user_userRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_userRoles to fetch.
     */
    orderBy?: user_userRoleOrderByWithRelationInput | user_userRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_userRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_userRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_userRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_userRoles
    **/
    _count?: true | User_userRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_userRoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_userRoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_userRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_userRoleMaxAggregateInputType
  }

  export type GetUser_userRoleAggregateType<T extends User_userRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_userRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_userRole[P]>
      : GetScalarType<T[P], AggregateUser_userRole[P]>
  }




  export type user_userRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_userRoleWhereInput
    orderBy?: user_userRoleOrderByWithAggregationInput | user_userRoleOrderByWithAggregationInput[]
    by: User_userRoleScalarFieldEnum[] | User_userRoleScalarFieldEnum
    having?: user_userRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_userRoleCountAggregateInputType | true
    _avg?: User_userRoleAvgAggregateInputType
    _sum?: User_userRoleSumAggregateInputType
    _min?: User_userRoleMinAggregateInputType
    _max?: User_userRoleMaxAggregateInputType
  }

  export type User_userRoleGroupByOutputType = {
    id: number
    userId: number
    userRoleId: number
    _count: User_userRoleCountAggregateOutputType | null
    _avg: User_userRoleAvgAggregateOutputType | null
    _sum: User_userRoleSumAggregateOutputType | null
    _min: User_userRoleMinAggregateOutputType | null
    _max: User_userRoleMaxAggregateOutputType | null
  }

  type GetUser_userRoleGroupByPayload<T extends user_userRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_userRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_userRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_userRoleGroupByOutputType[P]>
            : GetScalarType<T[P], User_userRoleGroupByOutputType[P]>
        }
      >
    >


  export type user_userRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    userRoleId?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    userRole?: boolean | userRoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_userRole"]>

  export type user_userRoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    userRoleId?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    userRole?: boolean | userRoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_userRole"]>

  export type user_userRoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    userRoleId?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    userRole?: boolean | userRoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_userRole"]>

  export type user_userRoleSelectScalar = {
    id?: boolean
    userId?: boolean
    userRoleId?: boolean
  }

  export type user_userRoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "userRoleId", ExtArgs["result"]["user_userRole"]>
  export type user_userRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    userRole?: boolean | userRoleDefaultArgs<ExtArgs>
  }
  export type user_userRoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    userRole?: boolean | userRoleDefaultArgs<ExtArgs>
  }
  export type user_userRoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    userRole?: boolean | userRoleDefaultArgs<ExtArgs>
  }

  export type $user_userRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_userRole"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      userRole: Prisma.$userRolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      userRoleId: number
    }, ExtArgs["result"]["user_userRole"]>
    composites: {}
  }

  type user_userRoleGetPayload<S extends boolean | null | undefined | user_userRoleDefaultArgs> = $Result.GetResult<Prisma.$user_userRolePayload, S>

  type user_userRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_userRoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_userRoleCountAggregateInputType | true
    }

  export interface user_userRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_userRole'], meta: { name: 'user_userRole' } }
    /**
     * Find zero or one User_userRole that matches the filter.
     * @param {user_userRoleFindUniqueArgs} args - Arguments to find a User_userRole
     * @example
     * // Get one User_userRole
     * const user_userRole = await prisma.user_userRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_userRoleFindUniqueArgs>(args: SelectSubset<T, user_userRoleFindUniqueArgs<ExtArgs>>): Prisma__user_userRoleClient<$Result.GetResult<Prisma.$user_userRolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_userRole that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_userRoleFindUniqueOrThrowArgs} args - Arguments to find a User_userRole
     * @example
     * // Get one User_userRole
     * const user_userRole = await prisma.user_userRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_userRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, user_userRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_userRoleClient<$Result.GetResult<Prisma.$user_userRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_userRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_userRoleFindFirstArgs} args - Arguments to find a User_userRole
     * @example
     * // Get one User_userRole
     * const user_userRole = await prisma.user_userRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_userRoleFindFirstArgs>(args?: SelectSubset<T, user_userRoleFindFirstArgs<ExtArgs>>): Prisma__user_userRoleClient<$Result.GetResult<Prisma.$user_userRolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_userRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_userRoleFindFirstOrThrowArgs} args - Arguments to find a User_userRole
     * @example
     * // Get one User_userRole
     * const user_userRole = await prisma.user_userRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_userRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, user_userRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_userRoleClient<$Result.GetResult<Prisma.$user_userRolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_userRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_userRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_userRoles
     * const user_userRoles = await prisma.user_userRole.findMany()
     * 
     * // Get first 10 User_userRoles
     * const user_userRoles = await prisma.user_userRole.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_userRoleWithIdOnly = await prisma.user_userRole.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends user_userRoleFindManyArgs>(args?: SelectSubset<T, user_userRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_userRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_userRole.
     * @param {user_userRoleCreateArgs} args - Arguments to create a User_userRole.
     * @example
     * // Create one User_userRole
     * const User_userRole = await prisma.user_userRole.create({
     *   data: {
     *     // ... data to create a User_userRole
     *   }
     * })
     * 
     */
    create<T extends user_userRoleCreateArgs>(args: SelectSubset<T, user_userRoleCreateArgs<ExtArgs>>): Prisma__user_userRoleClient<$Result.GetResult<Prisma.$user_userRolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_userRoles.
     * @param {user_userRoleCreateManyArgs} args - Arguments to create many User_userRoles.
     * @example
     * // Create many User_userRoles
     * const user_userRole = await prisma.user_userRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_userRoleCreateManyArgs>(args?: SelectSubset<T, user_userRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_userRoles and returns the data saved in the database.
     * @param {user_userRoleCreateManyAndReturnArgs} args - Arguments to create many User_userRoles.
     * @example
     * // Create many User_userRoles
     * const user_userRole = await prisma.user_userRole.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_userRoles and only return the `id`
     * const user_userRoleWithIdOnly = await prisma.user_userRole.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_userRoleCreateManyAndReturnArgs>(args?: SelectSubset<T, user_userRoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_userRolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_userRole.
     * @param {user_userRoleDeleteArgs} args - Arguments to delete one User_userRole.
     * @example
     * // Delete one User_userRole
     * const User_userRole = await prisma.user_userRole.delete({
     *   where: {
     *     // ... filter to delete one User_userRole
     *   }
     * })
     * 
     */
    delete<T extends user_userRoleDeleteArgs>(args: SelectSubset<T, user_userRoleDeleteArgs<ExtArgs>>): Prisma__user_userRoleClient<$Result.GetResult<Prisma.$user_userRolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_userRole.
     * @param {user_userRoleUpdateArgs} args - Arguments to update one User_userRole.
     * @example
     * // Update one User_userRole
     * const user_userRole = await prisma.user_userRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_userRoleUpdateArgs>(args: SelectSubset<T, user_userRoleUpdateArgs<ExtArgs>>): Prisma__user_userRoleClient<$Result.GetResult<Prisma.$user_userRolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_userRoles.
     * @param {user_userRoleDeleteManyArgs} args - Arguments to filter User_userRoles to delete.
     * @example
     * // Delete a few User_userRoles
     * const { count } = await prisma.user_userRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_userRoleDeleteManyArgs>(args?: SelectSubset<T, user_userRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_userRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_userRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_userRoles
     * const user_userRole = await prisma.user_userRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_userRoleUpdateManyArgs>(args: SelectSubset<T, user_userRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_userRoles and returns the data updated in the database.
     * @param {user_userRoleUpdateManyAndReturnArgs} args - Arguments to update many User_userRoles.
     * @example
     * // Update many User_userRoles
     * const user_userRole = await prisma.user_userRole.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_userRoles and only return the `id`
     * const user_userRoleWithIdOnly = await prisma.user_userRole.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends user_userRoleUpdateManyAndReturnArgs>(args: SelectSubset<T, user_userRoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_userRolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_userRole.
     * @param {user_userRoleUpsertArgs} args - Arguments to update or create a User_userRole.
     * @example
     * // Update or create a User_userRole
     * const user_userRole = await prisma.user_userRole.upsert({
     *   create: {
     *     // ... data to create a User_userRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_userRole we want to update
     *   }
     * })
     */
    upsert<T extends user_userRoleUpsertArgs>(args: SelectSubset<T, user_userRoleUpsertArgs<ExtArgs>>): Prisma__user_userRoleClient<$Result.GetResult<Prisma.$user_userRolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_userRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_userRoleCountArgs} args - Arguments to filter User_userRoles to count.
     * @example
     * // Count the number of User_userRoles
     * const count = await prisma.user_userRole.count({
     *   where: {
     *     // ... the filter for the User_userRoles we want to count
     *   }
     * })
    **/
    count<T extends user_userRoleCountArgs>(
      args?: Subset<T, user_userRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_userRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_userRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_userRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_userRoleAggregateArgs>(args: Subset<T, User_userRoleAggregateArgs>): Prisma.PrismaPromise<GetUser_userRoleAggregateType<T>>

    /**
     * Group by User_userRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_userRoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends user_userRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_userRoleGroupByArgs['orderBy'] }
        : { orderBy?: user_userRoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, user_userRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_userRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_userRole model
   */
  readonly fields: user_userRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_userRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_userRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    userRole<T extends userRoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userRoleDefaultArgs<ExtArgs>>): Prisma__userRoleClient<$Result.GetResult<Prisma.$userRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user_userRole model
   */
  interface user_userRoleFieldRefs {
    readonly id: FieldRef<"user_userRole", 'Int'>
    readonly userId: FieldRef<"user_userRole", 'Int'>
    readonly userRoleId: FieldRef<"user_userRole", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * user_userRole findUnique
   */
  export type user_userRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_userRole
     */
    select?: user_userRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_userRole
     */
    omit?: user_userRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_userRoleInclude<ExtArgs> | null
    /**
     * Filter, which user_userRole to fetch.
     */
    where: user_userRoleWhereUniqueInput
  }

  /**
   * user_userRole findUniqueOrThrow
   */
  export type user_userRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_userRole
     */
    select?: user_userRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_userRole
     */
    omit?: user_userRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_userRoleInclude<ExtArgs> | null
    /**
     * Filter, which user_userRole to fetch.
     */
    where: user_userRoleWhereUniqueInput
  }

  /**
   * user_userRole findFirst
   */
  export type user_userRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_userRole
     */
    select?: user_userRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_userRole
     */
    omit?: user_userRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_userRoleInclude<ExtArgs> | null
    /**
     * Filter, which user_userRole to fetch.
     */
    where?: user_userRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_userRoles to fetch.
     */
    orderBy?: user_userRoleOrderByWithRelationInput | user_userRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_userRoles.
     */
    cursor?: user_userRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_userRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_userRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_userRoles.
     */
    distinct?: User_userRoleScalarFieldEnum | User_userRoleScalarFieldEnum[]
  }

  /**
   * user_userRole findFirstOrThrow
   */
  export type user_userRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_userRole
     */
    select?: user_userRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_userRole
     */
    omit?: user_userRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_userRoleInclude<ExtArgs> | null
    /**
     * Filter, which user_userRole to fetch.
     */
    where?: user_userRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_userRoles to fetch.
     */
    orderBy?: user_userRoleOrderByWithRelationInput | user_userRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_userRoles.
     */
    cursor?: user_userRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_userRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_userRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_userRoles.
     */
    distinct?: User_userRoleScalarFieldEnum | User_userRoleScalarFieldEnum[]
  }

  /**
   * user_userRole findMany
   */
  export type user_userRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_userRole
     */
    select?: user_userRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_userRole
     */
    omit?: user_userRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_userRoleInclude<ExtArgs> | null
    /**
     * Filter, which user_userRoles to fetch.
     */
    where?: user_userRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_userRoles to fetch.
     */
    orderBy?: user_userRoleOrderByWithRelationInput | user_userRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_userRoles.
     */
    cursor?: user_userRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_userRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_userRoles.
     */
    skip?: number
    distinct?: User_userRoleScalarFieldEnum | User_userRoleScalarFieldEnum[]
  }

  /**
   * user_userRole create
   */
  export type user_userRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_userRole
     */
    select?: user_userRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_userRole
     */
    omit?: user_userRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_userRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a user_userRole.
     */
    data: XOR<user_userRoleCreateInput, user_userRoleUncheckedCreateInput>
  }

  /**
   * user_userRole createMany
   */
  export type user_userRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_userRoles.
     */
    data: user_userRoleCreateManyInput | user_userRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_userRole createManyAndReturn
   */
  export type user_userRoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_userRole
     */
    select?: user_userRoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_userRole
     */
    omit?: user_userRoleOmit<ExtArgs> | null
    /**
     * The data used to create many user_userRoles.
     */
    data: user_userRoleCreateManyInput | user_userRoleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_userRoleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_userRole update
   */
  export type user_userRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_userRole
     */
    select?: user_userRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_userRole
     */
    omit?: user_userRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_userRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a user_userRole.
     */
    data: XOR<user_userRoleUpdateInput, user_userRoleUncheckedUpdateInput>
    /**
     * Choose, which user_userRole to update.
     */
    where: user_userRoleWhereUniqueInput
  }

  /**
   * user_userRole updateMany
   */
  export type user_userRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_userRoles.
     */
    data: XOR<user_userRoleUpdateManyMutationInput, user_userRoleUncheckedUpdateManyInput>
    /**
     * Filter which user_userRoles to update
     */
    where?: user_userRoleWhereInput
    /**
     * Limit how many user_userRoles to update.
     */
    limit?: number
  }

  /**
   * user_userRole updateManyAndReturn
   */
  export type user_userRoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_userRole
     */
    select?: user_userRoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_userRole
     */
    omit?: user_userRoleOmit<ExtArgs> | null
    /**
     * The data used to update user_userRoles.
     */
    data: XOR<user_userRoleUpdateManyMutationInput, user_userRoleUncheckedUpdateManyInput>
    /**
     * Filter which user_userRoles to update
     */
    where?: user_userRoleWhereInput
    /**
     * Limit how many user_userRoles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_userRoleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_userRole upsert
   */
  export type user_userRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_userRole
     */
    select?: user_userRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_userRole
     */
    omit?: user_userRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_userRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the user_userRole to update in case it exists.
     */
    where: user_userRoleWhereUniqueInput
    /**
     * In case the user_userRole found by the `where` argument doesn't exist, create a new user_userRole with this data.
     */
    create: XOR<user_userRoleCreateInput, user_userRoleUncheckedCreateInput>
    /**
     * In case the user_userRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_userRoleUpdateInput, user_userRoleUncheckedUpdateInput>
  }

  /**
   * user_userRole delete
   */
  export type user_userRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_userRole
     */
    select?: user_userRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_userRole
     */
    omit?: user_userRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_userRoleInclude<ExtArgs> | null
    /**
     * Filter which user_userRole to delete.
     */
    where: user_userRoleWhereUniqueInput
  }

  /**
   * user_userRole deleteMany
   */
  export type user_userRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_userRoles to delete
     */
    where?: user_userRoleWhereInput
    /**
     * Limit how many user_userRoles to delete.
     */
    limit?: number
  }

  /**
   * user_userRole without action
   */
  export type user_userRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_userRole
     */
    select?: user_userRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_userRole
     */
    omit?: user_userRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_userRoleInclude<ExtArgs> | null
  }


  /**
   * Model department
   */

  export type AggregateDepartment = {
    _count: DepartmentCountAggregateOutputType | null
    _avg: DepartmentAvgAggregateOutputType | null
    _sum: DepartmentSumAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  export type DepartmentAvgAggregateOutputType = {
    id: number | null
  }

  export type DepartmentSumAggregateOutputType = {
    id: number | null
  }

  export type DepartmentMinAggregateOutputType = {
    id: number | null
    departmentName: string | null
    createdAt: Date | null
    isActive: boolean | null
  }

  export type DepartmentMaxAggregateOutputType = {
    id: number | null
    departmentName: string | null
    createdAt: Date | null
    isActive: boolean | null
  }

  export type DepartmentCountAggregateOutputType = {
    id: number
    departmentName: number
    createdAt: number
    isActive: number
    _all: number
  }


  export type DepartmentAvgAggregateInputType = {
    id?: true
  }

  export type DepartmentSumAggregateInputType = {
    id?: true
  }

  export type DepartmentMinAggregateInputType = {
    id?: true
    departmentName?: true
    createdAt?: true
    isActive?: true
  }

  export type DepartmentMaxAggregateInputType = {
    id?: true
    departmentName?: true
    createdAt?: true
    isActive?: true
  }

  export type DepartmentCountAggregateInputType = {
    id?: true
    departmentName?: true
    createdAt?: true
    isActive?: true
    _all?: true
  }

  export type DepartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which department to aggregate.
     */
    where?: departmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departments to fetch.
     */
    orderBy?: departmentOrderByWithRelationInput | departmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: departmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned departments
    **/
    _count?: true | DepartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DepartmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DepartmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentMaxAggregateInputType
  }

  export type GetDepartmentAggregateType<T extends DepartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartment[P]>
      : GetScalarType<T[P], AggregateDepartment[P]>
  }




  export type departmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: departmentWhereInput
    orderBy?: departmentOrderByWithAggregationInput | departmentOrderByWithAggregationInput[]
    by: DepartmentScalarFieldEnum[] | DepartmentScalarFieldEnum
    having?: departmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentCountAggregateInputType | true
    _avg?: DepartmentAvgAggregateInputType
    _sum?: DepartmentSumAggregateInputType
    _min?: DepartmentMinAggregateInputType
    _max?: DepartmentMaxAggregateInputType
  }

  export type DepartmentGroupByOutputType = {
    id: number
    departmentName: string
    createdAt: Date
    isActive: boolean
    _count: DepartmentCountAggregateOutputType | null
    _avg: DepartmentAvgAggregateOutputType | null
    _sum: DepartmentSumAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  type GetDepartmentGroupByPayload<T extends departmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
        }
      >
    >


  export type departmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    departmentName?: boolean
    createdAt?: boolean
    isActive?: boolean
    users?: boolean | department$usersArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type departmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    departmentName?: boolean
    createdAt?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["department"]>

  export type departmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    departmentName?: boolean
    createdAt?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["department"]>

  export type departmentSelectScalar = {
    id?: boolean
    departmentName?: boolean
    createdAt?: boolean
    isActive?: boolean
  }

  export type departmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "departmentName" | "createdAt" | "isActive", ExtArgs["result"]["department"]>
  export type departmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | department$usersArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type departmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type departmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $departmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "department"
    objects: {
      users: Prisma.$user_departmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      departmentName: string
      createdAt: Date
      isActive: boolean
    }, ExtArgs["result"]["department"]>
    composites: {}
  }

  type departmentGetPayload<S extends boolean | null | undefined | departmentDefaultArgs> = $Result.GetResult<Prisma.$departmentPayload, S>

  type departmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<departmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartmentCountAggregateInputType | true
    }

  export interface departmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['department'], meta: { name: 'department' } }
    /**
     * Find zero or one Department that matches the filter.
     * @param {departmentFindUniqueArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends departmentFindUniqueArgs>(args: SelectSubset<T, departmentFindUniqueArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Department that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {departmentFindUniqueOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends departmentFindUniqueOrThrowArgs>(args: SelectSubset<T, departmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentFindFirstArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends departmentFindFirstArgs>(args?: SelectSubset<T, departmentFindFirstArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentFindFirstOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends departmentFindFirstOrThrowArgs>(args?: SelectSubset<T, departmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.department.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.department.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const departmentWithIdOnly = await prisma.department.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends departmentFindManyArgs>(args?: SelectSubset<T, departmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Department.
     * @param {departmentCreateArgs} args - Arguments to create a Department.
     * @example
     * // Create one Department
     * const Department = await prisma.department.create({
     *   data: {
     *     // ... data to create a Department
     *   }
     * })
     * 
     */
    create<T extends departmentCreateArgs>(args: SelectSubset<T, departmentCreateArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Departments.
     * @param {departmentCreateManyArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends departmentCreateManyArgs>(args?: SelectSubset<T, departmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Departments and returns the data saved in the database.
     * @param {departmentCreateManyAndReturnArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Departments and only return the `id`
     * const departmentWithIdOnly = await prisma.department.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends departmentCreateManyAndReturnArgs>(args?: SelectSubset<T, departmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Department.
     * @param {departmentDeleteArgs} args - Arguments to delete one Department.
     * @example
     * // Delete one Department
     * const Department = await prisma.department.delete({
     *   where: {
     *     // ... filter to delete one Department
     *   }
     * })
     * 
     */
    delete<T extends departmentDeleteArgs>(args: SelectSubset<T, departmentDeleteArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Department.
     * @param {departmentUpdateArgs} args - Arguments to update one Department.
     * @example
     * // Update one Department
     * const department = await prisma.department.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends departmentUpdateArgs>(args: SelectSubset<T, departmentUpdateArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Departments.
     * @param {departmentDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.department.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends departmentDeleteManyArgs>(args?: SelectSubset<T, departmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends departmentUpdateManyArgs>(args: SelectSubset<T, departmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments and returns the data updated in the database.
     * @param {departmentUpdateManyAndReturnArgs} args - Arguments to update many Departments.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Departments and only return the `id`
     * const departmentWithIdOnly = await prisma.department.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends departmentUpdateManyAndReturnArgs>(args: SelectSubset<T, departmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Department.
     * @param {departmentUpsertArgs} args - Arguments to update or create a Department.
     * @example
     * // Update or create a Department
     * const department = await prisma.department.upsert({
     *   create: {
     *     // ... data to create a Department
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Department we want to update
     *   }
     * })
     */
    upsert<T extends departmentUpsertArgs>(args: SelectSubset<T, departmentUpsertArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.department.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends departmentCountArgs>(
      args?: Subset<T, departmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DepartmentAggregateArgs>(args: Subset<T, DepartmentAggregateArgs>): Prisma.PrismaPromise<GetDepartmentAggregateType<T>>

    /**
     * Group by Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends departmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: departmentGroupByArgs['orderBy'] }
        : { orderBy?: departmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, departmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the department model
   */
  readonly fields: departmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for department.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__departmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends department$usersArgs<ExtArgs> = {}>(args?: Subset<T, department$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_departmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the department model
   */
  interface departmentFieldRefs {
    readonly id: FieldRef<"department", 'Int'>
    readonly departmentName: FieldRef<"department", 'String'>
    readonly createdAt: FieldRef<"department", 'DateTime'>
    readonly isActive: FieldRef<"department", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * department findUnique
   */
  export type departmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentInclude<ExtArgs> | null
    /**
     * Filter, which department to fetch.
     */
    where: departmentWhereUniqueInput
  }

  /**
   * department findUniqueOrThrow
   */
  export type departmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentInclude<ExtArgs> | null
    /**
     * Filter, which department to fetch.
     */
    where: departmentWhereUniqueInput
  }

  /**
   * department findFirst
   */
  export type departmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentInclude<ExtArgs> | null
    /**
     * Filter, which department to fetch.
     */
    where?: departmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departments to fetch.
     */
    orderBy?: departmentOrderByWithRelationInput | departmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for departments.
     */
    cursor?: departmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * department findFirstOrThrow
   */
  export type departmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentInclude<ExtArgs> | null
    /**
     * Filter, which department to fetch.
     */
    where?: departmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departments to fetch.
     */
    orderBy?: departmentOrderByWithRelationInput | departmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for departments.
     */
    cursor?: departmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * department findMany
   */
  export type departmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentInclude<ExtArgs> | null
    /**
     * Filter, which departments to fetch.
     */
    where?: departmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departments to fetch.
     */
    orderBy?: departmentOrderByWithRelationInput | departmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing departments.
     */
    cursor?: departmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departments.
     */
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * department create
   */
  export type departmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentInclude<ExtArgs> | null
    /**
     * The data needed to create a department.
     */
    data: XOR<departmentCreateInput, departmentUncheckedCreateInput>
  }

  /**
   * department createMany
   */
  export type departmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many departments.
     */
    data: departmentCreateManyInput | departmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * department createManyAndReturn
   */
  export type departmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * The data used to create many departments.
     */
    data: departmentCreateManyInput | departmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * department update
   */
  export type departmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentInclude<ExtArgs> | null
    /**
     * The data needed to update a department.
     */
    data: XOR<departmentUpdateInput, departmentUncheckedUpdateInput>
    /**
     * Choose, which department to update.
     */
    where: departmentWhereUniqueInput
  }

  /**
   * department updateMany
   */
  export type departmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update departments.
     */
    data: XOR<departmentUpdateManyMutationInput, departmentUncheckedUpdateManyInput>
    /**
     * Filter which departments to update
     */
    where?: departmentWhereInput
    /**
     * Limit how many departments to update.
     */
    limit?: number
  }

  /**
   * department updateManyAndReturn
   */
  export type departmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * The data used to update departments.
     */
    data: XOR<departmentUpdateManyMutationInput, departmentUncheckedUpdateManyInput>
    /**
     * Filter which departments to update
     */
    where?: departmentWhereInput
    /**
     * Limit how many departments to update.
     */
    limit?: number
  }

  /**
   * department upsert
   */
  export type departmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentInclude<ExtArgs> | null
    /**
     * The filter to search for the department to update in case it exists.
     */
    where: departmentWhereUniqueInput
    /**
     * In case the department found by the `where` argument doesn't exist, create a new department with this data.
     */
    create: XOR<departmentCreateInput, departmentUncheckedCreateInput>
    /**
     * In case the department was found with the provided `where` argument, update it with this data.
     */
    update: XOR<departmentUpdateInput, departmentUncheckedUpdateInput>
  }

  /**
   * department delete
   */
  export type departmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentInclude<ExtArgs> | null
    /**
     * Filter which department to delete.
     */
    where: departmentWhereUniqueInput
  }

  /**
   * department deleteMany
   */
  export type departmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which departments to delete
     */
    where?: departmentWhereInput
    /**
     * Limit how many departments to delete.
     */
    limit?: number
  }

  /**
   * department.users
   */
  export type department$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_department
     */
    select?: user_departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_department
     */
    omit?: user_departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_departmentInclude<ExtArgs> | null
    where?: user_departmentWhereInput
    orderBy?: user_departmentOrderByWithRelationInput | user_departmentOrderByWithRelationInput[]
    cursor?: user_departmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_departmentScalarFieldEnum | User_departmentScalarFieldEnum[]
  }

  /**
   * department without action
   */
  export type departmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentInclude<ExtArgs> | null
  }


  /**
   * Model user_department
   */

  export type AggregateUser_department = {
    _count: User_departmentCountAggregateOutputType | null
    _avg: User_departmentAvgAggregateOutputType | null
    _sum: User_departmentSumAggregateOutputType | null
    _min: User_departmentMinAggregateOutputType | null
    _max: User_departmentMaxAggregateOutputType | null
  }

  export type User_departmentAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    departmentId: number | null
  }

  export type User_departmentSumAggregateOutputType = {
    id: number | null
    userId: number | null
    departmentId: number | null
  }

  export type User_departmentMinAggregateOutputType = {
    id: number | null
    userId: number | null
    departmentId: number | null
  }

  export type User_departmentMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    departmentId: number | null
  }

  export type User_departmentCountAggregateOutputType = {
    id: number
    userId: number
    departmentId: number
    _all: number
  }


  export type User_departmentAvgAggregateInputType = {
    id?: true
    userId?: true
    departmentId?: true
  }

  export type User_departmentSumAggregateInputType = {
    id?: true
    userId?: true
    departmentId?: true
  }

  export type User_departmentMinAggregateInputType = {
    id?: true
    userId?: true
    departmentId?: true
  }

  export type User_departmentMaxAggregateInputType = {
    id?: true
    userId?: true
    departmentId?: true
  }

  export type User_departmentCountAggregateInputType = {
    id?: true
    userId?: true
    departmentId?: true
    _all?: true
  }

  export type User_departmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_department to aggregate.
     */
    where?: user_departmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_departments to fetch.
     */
    orderBy?: user_departmentOrderByWithRelationInput | user_departmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_departmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_departments
    **/
    _count?: true | User_departmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_departmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_departmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_departmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_departmentMaxAggregateInputType
  }

  export type GetUser_departmentAggregateType<T extends User_departmentAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_department]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_department[P]>
      : GetScalarType<T[P], AggregateUser_department[P]>
  }




  export type user_departmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_departmentWhereInput
    orderBy?: user_departmentOrderByWithAggregationInput | user_departmentOrderByWithAggregationInput[]
    by: User_departmentScalarFieldEnum[] | User_departmentScalarFieldEnum
    having?: user_departmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_departmentCountAggregateInputType | true
    _avg?: User_departmentAvgAggregateInputType
    _sum?: User_departmentSumAggregateInputType
    _min?: User_departmentMinAggregateInputType
    _max?: User_departmentMaxAggregateInputType
  }

  export type User_departmentGroupByOutputType = {
    id: number
    userId: number
    departmentId: number
    _count: User_departmentCountAggregateOutputType | null
    _avg: User_departmentAvgAggregateOutputType | null
    _sum: User_departmentSumAggregateOutputType | null
    _min: User_departmentMinAggregateOutputType | null
    _max: User_departmentMaxAggregateOutputType | null
  }

  type GetUser_departmentGroupByPayload<T extends user_departmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_departmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_departmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_departmentGroupByOutputType[P]>
            : GetScalarType<T[P], User_departmentGroupByOutputType[P]>
        }
      >
    >


  export type user_departmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    departmentId?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    department?: boolean | departmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_department"]>

  export type user_departmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    departmentId?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    department?: boolean | departmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_department"]>

  export type user_departmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    departmentId?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    department?: boolean | departmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_department"]>

  export type user_departmentSelectScalar = {
    id?: boolean
    userId?: boolean
    departmentId?: boolean
  }

  export type user_departmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "departmentId", ExtArgs["result"]["user_department"]>
  export type user_departmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    department?: boolean | departmentDefaultArgs<ExtArgs>
  }
  export type user_departmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    department?: boolean | departmentDefaultArgs<ExtArgs>
  }
  export type user_departmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    department?: boolean | departmentDefaultArgs<ExtArgs>
  }

  export type $user_departmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_department"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      department: Prisma.$departmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      departmentId: number
    }, ExtArgs["result"]["user_department"]>
    composites: {}
  }

  type user_departmentGetPayload<S extends boolean | null | undefined | user_departmentDefaultArgs> = $Result.GetResult<Prisma.$user_departmentPayload, S>

  type user_departmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_departmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_departmentCountAggregateInputType | true
    }

  export interface user_departmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_department'], meta: { name: 'user_department' } }
    /**
     * Find zero or one User_department that matches the filter.
     * @param {user_departmentFindUniqueArgs} args - Arguments to find a User_department
     * @example
     * // Get one User_department
     * const user_department = await prisma.user_department.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_departmentFindUniqueArgs>(args: SelectSubset<T, user_departmentFindUniqueArgs<ExtArgs>>): Prisma__user_departmentClient<$Result.GetResult<Prisma.$user_departmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_department that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_departmentFindUniqueOrThrowArgs} args - Arguments to find a User_department
     * @example
     * // Get one User_department
     * const user_department = await prisma.user_department.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_departmentFindUniqueOrThrowArgs>(args: SelectSubset<T, user_departmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_departmentClient<$Result.GetResult<Prisma.$user_departmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_department that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_departmentFindFirstArgs} args - Arguments to find a User_department
     * @example
     * // Get one User_department
     * const user_department = await prisma.user_department.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_departmentFindFirstArgs>(args?: SelectSubset<T, user_departmentFindFirstArgs<ExtArgs>>): Prisma__user_departmentClient<$Result.GetResult<Prisma.$user_departmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_department that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_departmentFindFirstOrThrowArgs} args - Arguments to find a User_department
     * @example
     * // Get one User_department
     * const user_department = await prisma.user_department.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_departmentFindFirstOrThrowArgs>(args?: SelectSubset<T, user_departmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_departmentClient<$Result.GetResult<Prisma.$user_departmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_departmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_departments
     * const user_departments = await prisma.user_department.findMany()
     * 
     * // Get first 10 User_departments
     * const user_departments = await prisma.user_department.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_departmentWithIdOnly = await prisma.user_department.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends user_departmentFindManyArgs>(args?: SelectSubset<T, user_departmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_departmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_department.
     * @param {user_departmentCreateArgs} args - Arguments to create a User_department.
     * @example
     * // Create one User_department
     * const User_department = await prisma.user_department.create({
     *   data: {
     *     // ... data to create a User_department
     *   }
     * })
     * 
     */
    create<T extends user_departmentCreateArgs>(args: SelectSubset<T, user_departmentCreateArgs<ExtArgs>>): Prisma__user_departmentClient<$Result.GetResult<Prisma.$user_departmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_departments.
     * @param {user_departmentCreateManyArgs} args - Arguments to create many User_departments.
     * @example
     * // Create many User_departments
     * const user_department = await prisma.user_department.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_departmentCreateManyArgs>(args?: SelectSubset<T, user_departmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_departments and returns the data saved in the database.
     * @param {user_departmentCreateManyAndReturnArgs} args - Arguments to create many User_departments.
     * @example
     * // Create many User_departments
     * const user_department = await prisma.user_department.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_departments and only return the `id`
     * const user_departmentWithIdOnly = await prisma.user_department.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_departmentCreateManyAndReturnArgs>(args?: SelectSubset<T, user_departmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_departmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_department.
     * @param {user_departmentDeleteArgs} args - Arguments to delete one User_department.
     * @example
     * // Delete one User_department
     * const User_department = await prisma.user_department.delete({
     *   where: {
     *     // ... filter to delete one User_department
     *   }
     * })
     * 
     */
    delete<T extends user_departmentDeleteArgs>(args: SelectSubset<T, user_departmentDeleteArgs<ExtArgs>>): Prisma__user_departmentClient<$Result.GetResult<Prisma.$user_departmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_department.
     * @param {user_departmentUpdateArgs} args - Arguments to update one User_department.
     * @example
     * // Update one User_department
     * const user_department = await prisma.user_department.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_departmentUpdateArgs>(args: SelectSubset<T, user_departmentUpdateArgs<ExtArgs>>): Prisma__user_departmentClient<$Result.GetResult<Prisma.$user_departmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_departments.
     * @param {user_departmentDeleteManyArgs} args - Arguments to filter User_departments to delete.
     * @example
     * // Delete a few User_departments
     * const { count } = await prisma.user_department.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_departmentDeleteManyArgs>(args?: SelectSubset<T, user_departmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_departmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_departments
     * const user_department = await prisma.user_department.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_departmentUpdateManyArgs>(args: SelectSubset<T, user_departmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_departments and returns the data updated in the database.
     * @param {user_departmentUpdateManyAndReturnArgs} args - Arguments to update many User_departments.
     * @example
     * // Update many User_departments
     * const user_department = await prisma.user_department.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_departments and only return the `id`
     * const user_departmentWithIdOnly = await prisma.user_department.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends user_departmentUpdateManyAndReturnArgs>(args: SelectSubset<T, user_departmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_departmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_department.
     * @param {user_departmentUpsertArgs} args - Arguments to update or create a User_department.
     * @example
     * // Update or create a User_department
     * const user_department = await prisma.user_department.upsert({
     *   create: {
     *     // ... data to create a User_department
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_department we want to update
     *   }
     * })
     */
    upsert<T extends user_departmentUpsertArgs>(args: SelectSubset<T, user_departmentUpsertArgs<ExtArgs>>): Prisma__user_departmentClient<$Result.GetResult<Prisma.$user_departmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_departmentCountArgs} args - Arguments to filter User_departments to count.
     * @example
     * // Count the number of User_departments
     * const count = await prisma.user_department.count({
     *   where: {
     *     // ... the filter for the User_departments we want to count
     *   }
     * })
    **/
    count<T extends user_departmentCountArgs>(
      args?: Subset<T, user_departmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_departmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_departmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_departmentAggregateArgs>(args: Subset<T, User_departmentAggregateArgs>): Prisma.PrismaPromise<GetUser_departmentAggregateType<T>>

    /**
     * Group by User_department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_departmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends user_departmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_departmentGroupByArgs['orderBy'] }
        : { orderBy?: user_departmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, user_departmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_departmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_department model
   */
  readonly fields: user_departmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_department.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_departmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    department<T extends departmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, departmentDefaultArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user_department model
   */
  interface user_departmentFieldRefs {
    readonly id: FieldRef<"user_department", 'Int'>
    readonly userId: FieldRef<"user_department", 'Int'>
    readonly departmentId: FieldRef<"user_department", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * user_department findUnique
   */
  export type user_departmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_department
     */
    select?: user_departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_department
     */
    omit?: user_departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_departmentInclude<ExtArgs> | null
    /**
     * Filter, which user_department to fetch.
     */
    where: user_departmentWhereUniqueInput
  }

  /**
   * user_department findUniqueOrThrow
   */
  export type user_departmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_department
     */
    select?: user_departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_department
     */
    omit?: user_departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_departmentInclude<ExtArgs> | null
    /**
     * Filter, which user_department to fetch.
     */
    where: user_departmentWhereUniqueInput
  }

  /**
   * user_department findFirst
   */
  export type user_departmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_department
     */
    select?: user_departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_department
     */
    omit?: user_departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_departmentInclude<ExtArgs> | null
    /**
     * Filter, which user_department to fetch.
     */
    where?: user_departmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_departments to fetch.
     */
    orderBy?: user_departmentOrderByWithRelationInput | user_departmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_departments.
     */
    cursor?: user_departmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_departments.
     */
    distinct?: User_departmentScalarFieldEnum | User_departmentScalarFieldEnum[]
  }

  /**
   * user_department findFirstOrThrow
   */
  export type user_departmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_department
     */
    select?: user_departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_department
     */
    omit?: user_departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_departmentInclude<ExtArgs> | null
    /**
     * Filter, which user_department to fetch.
     */
    where?: user_departmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_departments to fetch.
     */
    orderBy?: user_departmentOrderByWithRelationInput | user_departmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_departments.
     */
    cursor?: user_departmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_departments.
     */
    distinct?: User_departmentScalarFieldEnum | User_departmentScalarFieldEnum[]
  }

  /**
   * user_department findMany
   */
  export type user_departmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_department
     */
    select?: user_departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_department
     */
    omit?: user_departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_departmentInclude<ExtArgs> | null
    /**
     * Filter, which user_departments to fetch.
     */
    where?: user_departmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_departments to fetch.
     */
    orderBy?: user_departmentOrderByWithRelationInput | user_departmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_departments.
     */
    cursor?: user_departmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_departments.
     */
    skip?: number
    distinct?: User_departmentScalarFieldEnum | User_departmentScalarFieldEnum[]
  }

  /**
   * user_department create
   */
  export type user_departmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_department
     */
    select?: user_departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_department
     */
    omit?: user_departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_departmentInclude<ExtArgs> | null
    /**
     * The data needed to create a user_department.
     */
    data: XOR<user_departmentCreateInput, user_departmentUncheckedCreateInput>
  }

  /**
   * user_department createMany
   */
  export type user_departmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_departments.
     */
    data: user_departmentCreateManyInput | user_departmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_department createManyAndReturn
   */
  export type user_departmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_department
     */
    select?: user_departmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_department
     */
    omit?: user_departmentOmit<ExtArgs> | null
    /**
     * The data used to create many user_departments.
     */
    data: user_departmentCreateManyInput | user_departmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_departmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_department update
   */
  export type user_departmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_department
     */
    select?: user_departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_department
     */
    omit?: user_departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_departmentInclude<ExtArgs> | null
    /**
     * The data needed to update a user_department.
     */
    data: XOR<user_departmentUpdateInput, user_departmentUncheckedUpdateInput>
    /**
     * Choose, which user_department to update.
     */
    where: user_departmentWhereUniqueInput
  }

  /**
   * user_department updateMany
   */
  export type user_departmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_departments.
     */
    data: XOR<user_departmentUpdateManyMutationInput, user_departmentUncheckedUpdateManyInput>
    /**
     * Filter which user_departments to update
     */
    where?: user_departmentWhereInput
    /**
     * Limit how many user_departments to update.
     */
    limit?: number
  }

  /**
   * user_department updateManyAndReturn
   */
  export type user_departmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_department
     */
    select?: user_departmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_department
     */
    omit?: user_departmentOmit<ExtArgs> | null
    /**
     * The data used to update user_departments.
     */
    data: XOR<user_departmentUpdateManyMutationInput, user_departmentUncheckedUpdateManyInput>
    /**
     * Filter which user_departments to update
     */
    where?: user_departmentWhereInput
    /**
     * Limit how many user_departments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_departmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_department upsert
   */
  export type user_departmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_department
     */
    select?: user_departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_department
     */
    omit?: user_departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_departmentInclude<ExtArgs> | null
    /**
     * The filter to search for the user_department to update in case it exists.
     */
    where: user_departmentWhereUniqueInput
    /**
     * In case the user_department found by the `where` argument doesn't exist, create a new user_department with this data.
     */
    create: XOR<user_departmentCreateInput, user_departmentUncheckedCreateInput>
    /**
     * In case the user_department was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_departmentUpdateInput, user_departmentUncheckedUpdateInput>
  }

  /**
   * user_department delete
   */
  export type user_departmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_department
     */
    select?: user_departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_department
     */
    omit?: user_departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_departmentInclude<ExtArgs> | null
    /**
     * Filter which user_department to delete.
     */
    where: user_departmentWhereUniqueInput
  }

  /**
   * user_department deleteMany
   */
  export type user_departmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_departments to delete
     */
    where?: user_departmentWhereInput
    /**
     * Limit how many user_departments to delete.
     */
    limit?: number
  }

  /**
   * user_department without action
   */
  export type user_departmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_department
     */
    select?: user_departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_department
     */
    omit?: user_departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_departmentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    address: 'address',
    phone: 'phone',
    isApproved: 'isApproved',
    isActive: 'isActive',
    isAvailable: 'isAvailable',
    currentTickets: 'currentTickets',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserTypesScalarFieldEnum: {
    id: 'id',
    userTypeName: 'userTypeName',
    createdAt: 'createdAt',
    isActive: 'isActive'
  };

  export type UserTypesScalarFieldEnum = (typeof UserTypesScalarFieldEnum)[keyof typeof UserTypesScalarFieldEnum]


  export const User_userTypeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    usertypeId: 'usertypeId'
  };

  export type User_userTypeScalarFieldEnum = (typeof User_userTypeScalarFieldEnum)[keyof typeof User_userTypeScalarFieldEnum]


  export const UserRoleScalarFieldEnum: {
    id: 'id',
    userRoleName: 'userRoleName',
    createdAt: 'createdAt',
    isActive: 'isActive'
  };

  export type UserRoleScalarFieldEnum = (typeof UserRoleScalarFieldEnum)[keyof typeof UserRoleScalarFieldEnum]


  export const User_userRoleScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    userRoleId: 'userRoleId'
  };

  export type User_userRoleScalarFieldEnum = (typeof User_userRoleScalarFieldEnum)[keyof typeof User_userRoleScalarFieldEnum]


  export const DepartmentScalarFieldEnum: {
    id: 'id',
    departmentName: 'departmentName',
    createdAt: 'createdAt',
    isActive: 'isActive'
  };

  export type DepartmentScalarFieldEnum = (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum]


  export const User_departmentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    departmentId: 'departmentId'
  };

  export type User_departmentScalarFieldEnum = (typeof User_departmentScalarFieldEnum)[keyof typeof User_departmentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: IntFilter<"user"> | number
    firstName?: StringFilter<"user"> | string
    lastName?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    address?: StringFilter<"user"> | string
    phone?: StringFilter<"user"> | string
    isApproved?: BoolFilter<"user"> | boolean
    isActive?: BoolFilter<"user"> | boolean
    isAvailable?: BoolFilter<"user"> | boolean
    currentTickets?: IntFilter<"user"> | number
    createdAt?: DateTimeFilter<"user"> | Date | string
    userTypes?: User_userTypeListRelationFilter
    userRoles?: User_userRoleListRelationFilter
    departments?: User_departmentListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    isApproved?: SortOrder
    isActive?: SortOrder
    isAvailable?: SortOrder
    currentTickets?: SortOrder
    createdAt?: SortOrder
    userTypes?: user_userTypeOrderByRelationAggregateInput
    userRoles?: user_userRoleOrderByRelationAggregateInput
    departments?: user_departmentOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    firstName?: StringFilter<"user"> | string
    lastName?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    address?: StringFilter<"user"> | string
    phone?: StringFilter<"user"> | string
    isApproved?: BoolFilter<"user"> | boolean
    isActive?: BoolFilter<"user"> | boolean
    isAvailable?: BoolFilter<"user"> | boolean
    currentTickets?: IntFilter<"user"> | number
    createdAt?: DateTimeFilter<"user"> | Date | string
    userTypes?: User_userTypeListRelationFilter
    userRoles?: User_userRoleListRelationFilter
    departments?: User_departmentListRelationFilter
  }, "id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    isApproved?: SortOrder
    isActive?: SortOrder
    isAvailable?: SortOrder
    currentTickets?: SortOrder
    createdAt?: SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user"> | number
    firstName?: StringWithAggregatesFilter<"user"> | string
    lastName?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    address?: StringWithAggregatesFilter<"user"> | string
    phone?: StringWithAggregatesFilter<"user"> | string
    isApproved?: BoolWithAggregatesFilter<"user"> | boolean
    isActive?: BoolWithAggregatesFilter<"user"> | boolean
    isAvailable?: BoolWithAggregatesFilter<"user"> | boolean
    currentTickets?: IntWithAggregatesFilter<"user"> | number
    createdAt?: DateTimeWithAggregatesFilter<"user"> | Date | string
  }

  export type userTypesWhereInput = {
    AND?: userTypesWhereInput | userTypesWhereInput[]
    OR?: userTypesWhereInput[]
    NOT?: userTypesWhereInput | userTypesWhereInput[]
    id?: IntFilter<"userTypes"> | number
    userTypeName?: StringFilter<"userTypes"> | string
    createdAt?: DateTimeFilter<"userTypes"> | Date | string
    isActive?: BoolFilter<"userTypes"> | boolean
    users?: User_userTypeListRelationFilter
  }

  export type userTypesOrderByWithRelationInput = {
    id?: SortOrder
    userTypeName?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
    users?: user_userTypeOrderByRelationAggregateInput
  }

  export type userTypesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userTypeName?: string
    AND?: userTypesWhereInput | userTypesWhereInput[]
    OR?: userTypesWhereInput[]
    NOT?: userTypesWhereInput | userTypesWhereInput[]
    createdAt?: DateTimeFilter<"userTypes"> | Date | string
    isActive?: BoolFilter<"userTypes"> | boolean
    users?: User_userTypeListRelationFilter
  }, "id" | "userTypeName">

  export type userTypesOrderByWithAggregationInput = {
    id?: SortOrder
    userTypeName?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
    _count?: userTypesCountOrderByAggregateInput
    _avg?: userTypesAvgOrderByAggregateInput
    _max?: userTypesMaxOrderByAggregateInput
    _min?: userTypesMinOrderByAggregateInput
    _sum?: userTypesSumOrderByAggregateInput
  }

  export type userTypesScalarWhereWithAggregatesInput = {
    AND?: userTypesScalarWhereWithAggregatesInput | userTypesScalarWhereWithAggregatesInput[]
    OR?: userTypesScalarWhereWithAggregatesInput[]
    NOT?: userTypesScalarWhereWithAggregatesInput | userTypesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"userTypes"> | number
    userTypeName?: StringWithAggregatesFilter<"userTypes"> | string
    createdAt?: DateTimeWithAggregatesFilter<"userTypes"> | Date | string
    isActive?: BoolWithAggregatesFilter<"userTypes"> | boolean
  }

  export type user_userTypeWhereInput = {
    AND?: user_userTypeWhereInput | user_userTypeWhereInput[]
    OR?: user_userTypeWhereInput[]
    NOT?: user_userTypeWhereInput | user_userTypeWhereInput[]
    id?: IntFilter<"user_userType"> | number
    userId?: IntFilter<"user_userType"> | number
    usertypeId?: IntFilter<"user_userType"> | number
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    userType?: XOR<UserTypesScalarRelationFilter, userTypesWhereInput>
  }

  export type user_userTypeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    usertypeId?: SortOrder
    user?: userOrderByWithRelationInput
    userType?: userTypesOrderByWithRelationInput
  }

  export type user_userTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: user_userTypeWhereInput | user_userTypeWhereInput[]
    OR?: user_userTypeWhereInput[]
    NOT?: user_userTypeWhereInput | user_userTypeWhereInput[]
    userId?: IntFilter<"user_userType"> | number
    usertypeId?: IntFilter<"user_userType"> | number
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    userType?: XOR<UserTypesScalarRelationFilter, userTypesWhereInput>
  }, "id">

  export type user_userTypeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    usertypeId?: SortOrder
    _count?: user_userTypeCountOrderByAggregateInput
    _avg?: user_userTypeAvgOrderByAggregateInput
    _max?: user_userTypeMaxOrderByAggregateInput
    _min?: user_userTypeMinOrderByAggregateInput
    _sum?: user_userTypeSumOrderByAggregateInput
  }

  export type user_userTypeScalarWhereWithAggregatesInput = {
    AND?: user_userTypeScalarWhereWithAggregatesInput | user_userTypeScalarWhereWithAggregatesInput[]
    OR?: user_userTypeScalarWhereWithAggregatesInput[]
    NOT?: user_userTypeScalarWhereWithAggregatesInput | user_userTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user_userType"> | number
    userId?: IntWithAggregatesFilter<"user_userType"> | number
    usertypeId?: IntWithAggregatesFilter<"user_userType"> | number
  }

  export type userRoleWhereInput = {
    AND?: userRoleWhereInput | userRoleWhereInput[]
    OR?: userRoleWhereInput[]
    NOT?: userRoleWhereInput | userRoleWhereInput[]
    id?: IntFilter<"userRole"> | number
    userRoleName?: StringFilter<"userRole"> | string
    createdAt?: DateTimeFilter<"userRole"> | Date | string
    isActive?: BoolFilter<"userRole"> | boolean
    users?: User_userRoleListRelationFilter
  }

  export type userRoleOrderByWithRelationInput = {
    id?: SortOrder
    userRoleName?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
    users?: user_userRoleOrderByRelationAggregateInput
  }

  export type userRoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userRoleName?: string
    AND?: userRoleWhereInput | userRoleWhereInput[]
    OR?: userRoleWhereInput[]
    NOT?: userRoleWhereInput | userRoleWhereInput[]
    createdAt?: DateTimeFilter<"userRole"> | Date | string
    isActive?: BoolFilter<"userRole"> | boolean
    users?: User_userRoleListRelationFilter
  }, "id" | "userRoleName">

  export type userRoleOrderByWithAggregationInput = {
    id?: SortOrder
    userRoleName?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
    _count?: userRoleCountOrderByAggregateInput
    _avg?: userRoleAvgOrderByAggregateInput
    _max?: userRoleMaxOrderByAggregateInput
    _min?: userRoleMinOrderByAggregateInput
    _sum?: userRoleSumOrderByAggregateInput
  }

  export type userRoleScalarWhereWithAggregatesInput = {
    AND?: userRoleScalarWhereWithAggregatesInput | userRoleScalarWhereWithAggregatesInput[]
    OR?: userRoleScalarWhereWithAggregatesInput[]
    NOT?: userRoleScalarWhereWithAggregatesInput | userRoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"userRole"> | number
    userRoleName?: StringWithAggregatesFilter<"userRole"> | string
    createdAt?: DateTimeWithAggregatesFilter<"userRole"> | Date | string
    isActive?: BoolWithAggregatesFilter<"userRole"> | boolean
  }

  export type user_userRoleWhereInput = {
    AND?: user_userRoleWhereInput | user_userRoleWhereInput[]
    OR?: user_userRoleWhereInput[]
    NOT?: user_userRoleWhereInput | user_userRoleWhereInput[]
    id?: IntFilter<"user_userRole"> | number
    userId?: IntFilter<"user_userRole"> | number
    userRoleId?: IntFilter<"user_userRole"> | number
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    userRole?: XOR<UserRoleScalarRelationFilter, userRoleWhereInput>
  }

  export type user_userRoleOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    userRoleId?: SortOrder
    user?: userOrderByWithRelationInput
    userRole?: userRoleOrderByWithRelationInput
  }

  export type user_userRoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: user_userRoleWhereInput | user_userRoleWhereInput[]
    OR?: user_userRoleWhereInput[]
    NOT?: user_userRoleWhereInput | user_userRoleWhereInput[]
    userId?: IntFilter<"user_userRole"> | number
    userRoleId?: IntFilter<"user_userRole"> | number
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    userRole?: XOR<UserRoleScalarRelationFilter, userRoleWhereInput>
  }, "id">

  export type user_userRoleOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    userRoleId?: SortOrder
    _count?: user_userRoleCountOrderByAggregateInput
    _avg?: user_userRoleAvgOrderByAggregateInput
    _max?: user_userRoleMaxOrderByAggregateInput
    _min?: user_userRoleMinOrderByAggregateInput
    _sum?: user_userRoleSumOrderByAggregateInput
  }

  export type user_userRoleScalarWhereWithAggregatesInput = {
    AND?: user_userRoleScalarWhereWithAggregatesInput | user_userRoleScalarWhereWithAggregatesInput[]
    OR?: user_userRoleScalarWhereWithAggregatesInput[]
    NOT?: user_userRoleScalarWhereWithAggregatesInput | user_userRoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user_userRole"> | number
    userId?: IntWithAggregatesFilter<"user_userRole"> | number
    userRoleId?: IntWithAggregatesFilter<"user_userRole"> | number
  }

  export type departmentWhereInput = {
    AND?: departmentWhereInput | departmentWhereInput[]
    OR?: departmentWhereInput[]
    NOT?: departmentWhereInput | departmentWhereInput[]
    id?: IntFilter<"department"> | number
    departmentName?: StringFilter<"department"> | string
    createdAt?: DateTimeFilter<"department"> | Date | string
    isActive?: BoolFilter<"department"> | boolean
    users?: User_departmentListRelationFilter
  }

  export type departmentOrderByWithRelationInput = {
    id?: SortOrder
    departmentName?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
    users?: user_departmentOrderByRelationAggregateInput
  }

  export type departmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    departmentName?: string
    AND?: departmentWhereInput | departmentWhereInput[]
    OR?: departmentWhereInput[]
    NOT?: departmentWhereInput | departmentWhereInput[]
    createdAt?: DateTimeFilter<"department"> | Date | string
    isActive?: BoolFilter<"department"> | boolean
    users?: User_departmentListRelationFilter
  }, "id" | "departmentName">

  export type departmentOrderByWithAggregationInput = {
    id?: SortOrder
    departmentName?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
    _count?: departmentCountOrderByAggregateInput
    _avg?: departmentAvgOrderByAggregateInput
    _max?: departmentMaxOrderByAggregateInput
    _min?: departmentMinOrderByAggregateInput
    _sum?: departmentSumOrderByAggregateInput
  }

  export type departmentScalarWhereWithAggregatesInput = {
    AND?: departmentScalarWhereWithAggregatesInput | departmentScalarWhereWithAggregatesInput[]
    OR?: departmentScalarWhereWithAggregatesInput[]
    NOT?: departmentScalarWhereWithAggregatesInput | departmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"department"> | number
    departmentName?: StringWithAggregatesFilter<"department"> | string
    createdAt?: DateTimeWithAggregatesFilter<"department"> | Date | string
    isActive?: BoolWithAggregatesFilter<"department"> | boolean
  }

  export type user_departmentWhereInput = {
    AND?: user_departmentWhereInput | user_departmentWhereInput[]
    OR?: user_departmentWhereInput[]
    NOT?: user_departmentWhereInput | user_departmentWhereInput[]
    id?: IntFilter<"user_department"> | number
    userId?: IntFilter<"user_department"> | number
    departmentId?: IntFilter<"user_department"> | number
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    department?: XOR<DepartmentScalarRelationFilter, departmentWhereInput>
  }

  export type user_departmentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    departmentId?: SortOrder
    user?: userOrderByWithRelationInput
    department?: departmentOrderByWithRelationInput
  }

  export type user_departmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: user_departmentWhereInput | user_departmentWhereInput[]
    OR?: user_departmentWhereInput[]
    NOT?: user_departmentWhereInput | user_departmentWhereInput[]
    userId?: IntFilter<"user_department"> | number
    departmentId?: IntFilter<"user_department"> | number
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    department?: XOR<DepartmentScalarRelationFilter, departmentWhereInput>
  }, "id">

  export type user_departmentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    departmentId?: SortOrder
    _count?: user_departmentCountOrderByAggregateInput
    _avg?: user_departmentAvgOrderByAggregateInput
    _max?: user_departmentMaxOrderByAggregateInput
    _min?: user_departmentMinOrderByAggregateInput
    _sum?: user_departmentSumOrderByAggregateInput
  }

  export type user_departmentScalarWhereWithAggregatesInput = {
    AND?: user_departmentScalarWhereWithAggregatesInput | user_departmentScalarWhereWithAggregatesInput[]
    OR?: user_departmentScalarWhereWithAggregatesInput[]
    NOT?: user_departmentScalarWhereWithAggregatesInput | user_departmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user_department"> | number
    userId?: IntWithAggregatesFilter<"user_department"> | number
    departmentId?: IntWithAggregatesFilter<"user_department"> | number
  }

  export type userCreateInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    address: string
    phone: string
    isApproved?: boolean
    isActive?: boolean
    isAvailable?: boolean
    currentTickets?: number
    createdAt?: Date | string
    userTypes?: user_userTypeCreateNestedManyWithoutUserInput
    userRoles?: user_userRoleCreateNestedManyWithoutUserInput
    departments?: user_departmentCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    address: string
    phone: string
    isApproved?: boolean
    isActive?: boolean
    isAvailable?: boolean
    currentTickets?: number
    createdAt?: Date | string
    userTypes?: user_userTypeUncheckedCreateNestedManyWithoutUserInput
    userRoles?: user_userRoleUncheckedCreateNestedManyWithoutUserInput
    departments?: user_departmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    currentTickets?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userTypes?: user_userTypeUpdateManyWithoutUserNestedInput
    userRoles?: user_userRoleUpdateManyWithoutUserNestedInput
    departments?: user_departmentUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    currentTickets?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userTypes?: user_userTypeUncheckedUpdateManyWithoutUserNestedInput
    userRoles?: user_userRoleUncheckedUpdateManyWithoutUserNestedInput
    departments?: user_departmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    address: string
    phone: string
    isApproved?: boolean
    isActive?: boolean
    isAvailable?: boolean
    currentTickets?: number
    createdAt?: Date | string
  }

  export type userUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    currentTickets?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    currentTickets?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userTypesCreateInput = {
    userTypeName: string
    createdAt?: Date | string
    isActive?: boolean
    users?: user_userTypeCreateNestedManyWithoutUserTypeInput
  }

  export type userTypesUncheckedCreateInput = {
    id?: number
    userTypeName: string
    createdAt?: Date | string
    isActive?: boolean
    users?: user_userTypeUncheckedCreateNestedManyWithoutUserTypeInput
  }

  export type userTypesUpdateInput = {
    userTypeName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    users?: user_userTypeUpdateManyWithoutUserTypeNestedInput
  }

  export type userTypesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userTypeName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    users?: user_userTypeUncheckedUpdateManyWithoutUserTypeNestedInput
  }

  export type userTypesCreateManyInput = {
    id?: number
    userTypeName: string
    createdAt?: Date | string
    isActive?: boolean
  }

  export type userTypesUpdateManyMutationInput = {
    userTypeName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type userTypesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userTypeName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type user_userTypeCreateInput = {
    user: userCreateNestedOneWithoutUserTypesInput
    userType: userTypesCreateNestedOneWithoutUsersInput
  }

  export type user_userTypeUncheckedCreateInput = {
    id?: number
    userId: number
    usertypeId: number
  }

  export type user_userTypeUpdateInput = {
    user?: userUpdateOneRequiredWithoutUserTypesNestedInput
    userType?: userTypesUpdateOneRequiredWithoutUsersNestedInput
  }

  export type user_userTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    usertypeId?: IntFieldUpdateOperationsInput | number
  }

  export type user_userTypeCreateManyInput = {
    id?: number
    userId: number
    usertypeId: number
  }

  export type user_userTypeUpdateManyMutationInput = {

  }

  export type user_userTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    usertypeId?: IntFieldUpdateOperationsInput | number
  }

  export type userRoleCreateInput = {
    userRoleName: string
    createdAt?: Date | string
    isActive?: boolean
    users?: user_userRoleCreateNestedManyWithoutUserRoleInput
  }

  export type userRoleUncheckedCreateInput = {
    id?: number
    userRoleName: string
    createdAt?: Date | string
    isActive?: boolean
    users?: user_userRoleUncheckedCreateNestedManyWithoutUserRoleInput
  }

  export type userRoleUpdateInput = {
    userRoleName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    users?: user_userRoleUpdateManyWithoutUserRoleNestedInput
  }

  export type userRoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userRoleName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    users?: user_userRoleUncheckedUpdateManyWithoutUserRoleNestedInput
  }

  export type userRoleCreateManyInput = {
    id?: number
    userRoleName: string
    createdAt?: Date | string
    isActive?: boolean
  }

  export type userRoleUpdateManyMutationInput = {
    userRoleName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type userRoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userRoleName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type user_userRoleCreateInput = {
    user: userCreateNestedOneWithoutUserRolesInput
    userRole: userRoleCreateNestedOneWithoutUsersInput
  }

  export type user_userRoleUncheckedCreateInput = {
    id?: number
    userId: number
    userRoleId: number
  }

  export type user_userRoleUpdateInput = {
    user?: userUpdateOneRequiredWithoutUserRolesNestedInput
    userRole?: userRoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type user_userRoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    userRoleId?: IntFieldUpdateOperationsInput | number
  }

  export type user_userRoleCreateManyInput = {
    id?: number
    userId: number
    userRoleId: number
  }

  export type user_userRoleUpdateManyMutationInput = {

  }

  export type user_userRoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    userRoleId?: IntFieldUpdateOperationsInput | number
  }

  export type departmentCreateInput = {
    departmentName: string
    createdAt?: Date | string
    isActive?: boolean
    users?: user_departmentCreateNestedManyWithoutDepartmentInput
  }

  export type departmentUncheckedCreateInput = {
    id?: number
    departmentName: string
    createdAt?: Date | string
    isActive?: boolean
    users?: user_departmentUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type departmentUpdateInput = {
    departmentName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    users?: user_departmentUpdateManyWithoutDepartmentNestedInput
  }

  export type departmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    departmentName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    users?: user_departmentUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type departmentCreateManyInput = {
    id?: number
    departmentName: string
    createdAt?: Date | string
    isActive?: boolean
  }

  export type departmentUpdateManyMutationInput = {
    departmentName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type departmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    departmentName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type user_departmentCreateInput = {
    user: userCreateNestedOneWithoutDepartmentsInput
    department: departmentCreateNestedOneWithoutUsersInput
  }

  export type user_departmentUncheckedCreateInput = {
    id?: number
    userId: number
    departmentId: number
  }

  export type user_departmentUpdateInput = {
    user?: userUpdateOneRequiredWithoutDepartmentsNestedInput
    department?: departmentUpdateOneRequiredWithoutUsersNestedInput
  }

  export type user_departmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    departmentId?: IntFieldUpdateOperationsInput | number
  }

  export type user_departmentCreateManyInput = {
    id?: number
    userId: number
    departmentId: number
  }

  export type user_departmentUpdateManyMutationInput = {

  }

  export type user_departmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    departmentId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type User_userTypeListRelationFilter = {
    every?: user_userTypeWhereInput
    some?: user_userTypeWhereInput
    none?: user_userTypeWhereInput
  }

  export type User_userRoleListRelationFilter = {
    every?: user_userRoleWhereInput
    some?: user_userRoleWhereInput
    none?: user_userRoleWhereInput
  }

  export type User_departmentListRelationFilter = {
    every?: user_departmentWhereInput
    some?: user_departmentWhereInput
    none?: user_departmentWhereInput
  }

  export type user_userTypeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type user_userRoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type user_departmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    isApproved?: SortOrder
    isActive?: SortOrder
    isAvailable?: SortOrder
    currentTickets?: SortOrder
    createdAt?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
    currentTickets?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    isApproved?: SortOrder
    isActive?: SortOrder
    isAvailable?: SortOrder
    currentTickets?: SortOrder
    createdAt?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    isApproved?: SortOrder
    isActive?: SortOrder
    isAvailable?: SortOrder
    currentTickets?: SortOrder
    createdAt?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    id?: SortOrder
    currentTickets?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type userTypesCountOrderByAggregateInput = {
    id?: SortOrder
    userTypeName?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
  }

  export type userTypesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type userTypesMaxOrderByAggregateInput = {
    id?: SortOrder
    userTypeName?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
  }

  export type userTypesMinOrderByAggregateInput = {
    id?: SortOrder
    userTypeName?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
  }

  export type userTypesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type UserTypesScalarRelationFilter = {
    is?: userTypesWhereInput
    isNot?: userTypesWhereInput
  }

  export type user_userTypeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    usertypeId?: SortOrder
  }

  export type user_userTypeAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    usertypeId?: SortOrder
  }

  export type user_userTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    usertypeId?: SortOrder
  }

  export type user_userTypeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    usertypeId?: SortOrder
  }

  export type user_userTypeSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    usertypeId?: SortOrder
  }

  export type userRoleCountOrderByAggregateInput = {
    id?: SortOrder
    userRoleName?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
  }

  export type userRoleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type userRoleMaxOrderByAggregateInput = {
    id?: SortOrder
    userRoleName?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
  }

  export type userRoleMinOrderByAggregateInput = {
    id?: SortOrder
    userRoleName?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
  }

  export type userRoleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserRoleScalarRelationFilter = {
    is?: userRoleWhereInput
    isNot?: userRoleWhereInput
  }

  export type user_userRoleCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    userRoleId?: SortOrder
  }

  export type user_userRoleAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    userRoleId?: SortOrder
  }

  export type user_userRoleMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    userRoleId?: SortOrder
  }

  export type user_userRoleMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    userRoleId?: SortOrder
  }

  export type user_userRoleSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    userRoleId?: SortOrder
  }

  export type departmentCountOrderByAggregateInput = {
    id?: SortOrder
    departmentName?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
  }

  export type departmentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type departmentMaxOrderByAggregateInput = {
    id?: SortOrder
    departmentName?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
  }

  export type departmentMinOrderByAggregateInput = {
    id?: SortOrder
    departmentName?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
  }

  export type departmentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DepartmentScalarRelationFilter = {
    is?: departmentWhereInput
    isNot?: departmentWhereInput
  }

  export type user_departmentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    departmentId?: SortOrder
  }

  export type user_departmentAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    departmentId?: SortOrder
  }

  export type user_departmentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    departmentId?: SortOrder
  }

  export type user_departmentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    departmentId?: SortOrder
  }

  export type user_departmentSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    departmentId?: SortOrder
  }

  export type user_userTypeCreateNestedManyWithoutUserInput = {
    create?: XOR<user_userTypeCreateWithoutUserInput, user_userTypeUncheckedCreateWithoutUserInput> | user_userTypeCreateWithoutUserInput[] | user_userTypeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_userTypeCreateOrConnectWithoutUserInput | user_userTypeCreateOrConnectWithoutUserInput[]
    createMany?: user_userTypeCreateManyUserInputEnvelope
    connect?: user_userTypeWhereUniqueInput | user_userTypeWhereUniqueInput[]
  }

  export type user_userRoleCreateNestedManyWithoutUserInput = {
    create?: XOR<user_userRoleCreateWithoutUserInput, user_userRoleUncheckedCreateWithoutUserInput> | user_userRoleCreateWithoutUserInput[] | user_userRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_userRoleCreateOrConnectWithoutUserInput | user_userRoleCreateOrConnectWithoutUserInput[]
    createMany?: user_userRoleCreateManyUserInputEnvelope
    connect?: user_userRoleWhereUniqueInput | user_userRoleWhereUniqueInput[]
  }

  export type user_departmentCreateNestedManyWithoutUserInput = {
    create?: XOR<user_departmentCreateWithoutUserInput, user_departmentUncheckedCreateWithoutUserInput> | user_departmentCreateWithoutUserInput[] | user_departmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_departmentCreateOrConnectWithoutUserInput | user_departmentCreateOrConnectWithoutUserInput[]
    createMany?: user_departmentCreateManyUserInputEnvelope
    connect?: user_departmentWhereUniqueInput | user_departmentWhereUniqueInput[]
  }

  export type user_userTypeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<user_userTypeCreateWithoutUserInput, user_userTypeUncheckedCreateWithoutUserInput> | user_userTypeCreateWithoutUserInput[] | user_userTypeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_userTypeCreateOrConnectWithoutUserInput | user_userTypeCreateOrConnectWithoutUserInput[]
    createMany?: user_userTypeCreateManyUserInputEnvelope
    connect?: user_userTypeWhereUniqueInput | user_userTypeWhereUniqueInput[]
  }

  export type user_userRoleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<user_userRoleCreateWithoutUserInput, user_userRoleUncheckedCreateWithoutUserInput> | user_userRoleCreateWithoutUserInput[] | user_userRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_userRoleCreateOrConnectWithoutUserInput | user_userRoleCreateOrConnectWithoutUserInput[]
    createMany?: user_userRoleCreateManyUserInputEnvelope
    connect?: user_userRoleWhereUniqueInput | user_userRoleWhereUniqueInput[]
  }

  export type user_departmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<user_departmentCreateWithoutUserInput, user_departmentUncheckedCreateWithoutUserInput> | user_departmentCreateWithoutUserInput[] | user_departmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_departmentCreateOrConnectWithoutUserInput | user_departmentCreateOrConnectWithoutUserInput[]
    createMany?: user_departmentCreateManyUserInputEnvelope
    connect?: user_departmentWhereUniqueInput | user_departmentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type user_userTypeUpdateManyWithoutUserNestedInput = {
    create?: XOR<user_userTypeCreateWithoutUserInput, user_userTypeUncheckedCreateWithoutUserInput> | user_userTypeCreateWithoutUserInput[] | user_userTypeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_userTypeCreateOrConnectWithoutUserInput | user_userTypeCreateOrConnectWithoutUserInput[]
    upsert?: user_userTypeUpsertWithWhereUniqueWithoutUserInput | user_userTypeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: user_userTypeCreateManyUserInputEnvelope
    set?: user_userTypeWhereUniqueInput | user_userTypeWhereUniqueInput[]
    disconnect?: user_userTypeWhereUniqueInput | user_userTypeWhereUniqueInput[]
    delete?: user_userTypeWhereUniqueInput | user_userTypeWhereUniqueInput[]
    connect?: user_userTypeWhereUniqueInput | user_userTypeWhereUniqueInput[]
    update?: user_userTypeUpdateWithWhereUniqueWithoutUserInput | user_userTypeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: user_userTypeUpdateManyWithWhereWithoutUserInput | user_userTypeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: user_userTypeScalarWhereInput | user_userTypeScalarWhereInput[]
  }

  export type user_userRoleUpdateManyWithoutUserNestedInput = {
    create?: XOR<user_userRoleCreateWithoutUserInput, user_userRoleUncheckedCreateWithoutUserInput> | user_userRoleCreateWithoutUserInput[] | user_userRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_userRoleCreateOrConnectWithoutUserInput | user_userRoleCreateOrConnectWithoutUserInput[]
    upsert?: user_userRoleUpsertWithWhereUniqueWithoutUserInput | user_userRoleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: user_userRoleCreateManyUserInputEnvelope
    set?: user_userRoleWhereUniqueInput | user_userRoleWhereUniqueInput[]
    disconnect?: user_userRoleWhereUniqueInput | user_userRoleWhereUniqueInput[]
    delete?: user_userRoleWhereUniqueInput | user_userRoleWhereUniqueInput[]
    connect?: user_userRoleWhereUniqueInput | user_userRoleWhereUniqueInput[]
    update?: user_userRoleUpdateWithWhereUniqueWithoutUserInput | user_userRoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: user_userRoleUpdateManyWithWhereWithoutUserInput | user_userRoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: user_userRoleScalarWhereInput | user_userRoleScalarWhereInput[]
  }

  export type user_departmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<user_departmentCreateWithoutUserInput, user_departmentUncheckedCreateWithoutUserInput> | user_departmentCreateWithoutUserInput[] | user_departmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_departmentCreateOrConnectWithoutUserInput | user_departmentCreateOrConnectWithoutUserInput[]
    upsert?: user_departmentUpsertWithWhereUniqueWithoutUserInput | user_departmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: user_departmentCreateManyUserInputEnvelope
    set?: user_departmentWhereUniqueInput | user_departmentWhereUniqueInput[]
    disconnect?: user_departmentWhereUniqueInput | user_departmentWhereUniqueInput[]
    delete?: user_departmentWhereUniqueInput | user_departmentWhereUniqueInput[]
    connect?: user_departmentWhereUniqueInput | user_departmentWhereUniqueInput[]
    update?: user_departmentUpdateWithWhereUniqueWithoutUserInput | user_departmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: user_departmentUpdateManyWithWhereWithoutUserInput | user_departmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: user_departmentScalarWhereInput | user_departmentScalarWhereInput[]
  }

  export type user_userTypeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<user_userTypeCreateWithoutUserInput, user_userTypeUncheckedCreateWithoutUserInput> | user_userTypeCreateWithoutUserInput[] | user_userTypeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_userTypeCreateOrConnectWithoutUserInput | user_userTypeCreateOrConnectWithoutUserInput[]
    upsert?: user_userTypeUpsertWithWhereUniqueWithoutUserInput | user_userTypeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: user_userTypeCreateManyUserInputEnvelope
    set?: user_userTypeWhereUniqueInput | user_userTypeWhereUniqueInput[]
    disconnect?: user_userTypeWhereUniqueInput | user_userTypeWhereUniqueInput[]
    delete?: user_userTypeWhereUniqueInput | user_userTypeWhereUniqueInput[]
    connect?: user_userTypeWhereUniqueInput | user_userTypeWhereUniqueInput[]
    update?: user_userTypeUpdateWithWhereUniqueWithoutUserInput | user_userTypeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: user_userTypeUpdateManyWithWhereWithoutUserInput | user_userTypeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: user_userTypeScalarWhereInput | user_userTypeScalarWhereInput[]
  }

  export type user_userRoleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<user_userRoleCreateWithoutUserInput, user_userRoleUncheckedCreateWithoutUserInput> | user_userRoleCreateWithoutUserInput[] | user_userRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_userRoleCreateOrConnectWithoutUserInput | user_userRoleCreateOrConnectWithoutUserInput[]
    upsert?: user_userRoleUpsertWithWhereUniqueWithoutUserInput | user_userRoleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: user_userRoleCreateManyUserInputEnvelope
    set?: user_userRoleWhereUniqueInput | user_userRoleWhereUniqueInput[]
    disconnect?: user_userRoleWhereUniqueInput | user_userRoleWhereUniqueInput[]
    delete?: user_userRoleWhereUniqueInput | user_userRoleWhereUniqueInput[]
    connect?: user_userRoleWhereUniqueInput | user_userRoleWhereUniqueInput[]
    update?: user_userRoleUpdateWithWhereUniqueWithoutUserInput | user_userRoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: user_userRoleUpdateManyWithWhereWithoutUserInput | user_userRoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: user_userRoleScalarWhereInput | user_userRoleScalarWhereInput[]
  }

  export type user_departmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<user_departmentCreateWithoutUserInput, user_departmentUncheckedCreateWithoutUserInput> | user_departmentCreateWithoutUserInput[] | user_departmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: user_departmentCreateOrConnectWithoutUserInput | user_departmentCreateOrConnectWithoutUserInput[]
    upsert?: user_departmentUpsertWithWhereUniqueWithoutUserInput | user_departmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: user_departmentCreateManyUserInputEnvelope
    set?: user_departmentWhereUniqueInput | user_departmentWhereUniqueInput[]
    disconnect?: user_departmentWhereUniqueInput | user_departmentWhereUniqueInput[]
    delete?: user_departmentWhereUniqueInput | user_departmentWhereUniqueInput[]
    connect?: user_departmentWhereUniqueInput | user_departmentWhereUniqueInput[]
    update?: user_departmentUpdateWithWhereUniqueWithoutUserInput | user_departmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: user_departmentUpdateManyWithWhereWithoutUserInput | user_departmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: user_departmentScalarWhereInput | user_departmentScalarWhereInput[]
  }

  export type user_userTypeCreateNestedManyWithoutUserTypeInput = {
    create?: XOR<user_userTypeCreateWithoutUserTypeInput, user_userTypeUncheckedCreateWithoutUserTypeInput> | user_userTypeCreateWithoutUserTypeInput[] | user_userTypeUncheckedCreateWithoutUserTypeInput[]
    connectOrCreate?: user_userTypeCreateOrConnectWithoutUserTypeInput | user_userTypeCreateOrConnectWithoutUserTypeInput[]
    createMany?: user_userTypeCreateManyUserTypeInputEnvelope
    connect?: user_userTypeWhereUniqueInput | user_userTypeWhereUniqueInput[]
  }

  export type user_userTypeUncheckedCreateNestedManyWithoutUserTypeInput = {
    create?: XOR<user_userTypeCreateWithoutUserTypeInput, user_userTypeUncheckedCreateWithoutUserTypeInput> | user_userTypeCreateWithoutUserTypeInput[] | user_userTypeUncheckedCreateWithoutUserTypeInput[]
    connectOrCreate?: user_userTypeCreateOrConnectWithoutUserTypeInput | user_userTypeCreateOrConnectWithoutUserTypeInput[]
    createMany?: user_userTypeCreateManyUserTypeInputEnvelope
    connect?: user_userTypeWhereUniqueInput | user_userTypeWhereUniqueInput[]
  }

  export type user_userTypeUpdateManyWithoutUserTypeNestedInput = {
    create?: XOR<user_userTypeCreateWithoutUserTypeInput, user_userTypeUncheckedCreateWithoutUserTypeInput> | user_userTypeCreateWithoutUserTypeInput[] | user_userTypeUncheckedCreateWithoutUserTypeInput[]
    connectOrCreate?: user_userTypeCreateOrConnectWithoutUserTypeInput | user_userTypeCreateOrConnectWithoutUserTypeInput[]
    upsert?: user_userTypeUpsertWithWhereUniqueWithoutUserTypeInput | user_userTypeUpsertWithWhereUniqueWithoutUserTypeInput[]
    createMany?: user_userTypeCreateManyUserTypeInputEnvelope
    set?: user_userTypeWhereUniqueInput | user_userTypeWhereUniqueInput[]
    disconnect?: user_userTypeWhereUniqueInput | user_userTypeWhereUniqueInput[]
    delete?: user_userTypeWhereUniqueInput | user_userTypeWhereUniqueInput[]
    connect?: user_userTypeWhereUniqueInput | user_userTypeWhereUniqueInput[]
    update?: user_userTypeUpdateWithWhereUniqueWithoutUserTypeInput | user_userTypeUpdateWithWhereUniqueWithoutUserTypeInput[]
    updateMany?: user_userTypeUpdateManyWithWhereWithoutUserTypeInput | user_userTypeUpdateManyWithWhereWithoutUserTypeInput[]
    deleteMany?: user_userTypeScalarWhereInput | user_userTypeScalarWhereInput[]
  }

  export type user_userTypeUncheckedUpdateManyWithoutUserTypeNestedInput = {
    create?: XOR<user_userTypeCreateWithoutUserTypeInput, user_userTypeUncheckedCreateWithoutUserTypeInput> | user_userTypeCreateWithoutUserTypeInput[] | user_userTypeUncheckedCreateWithoutUserTypeInput[]
    connectOrCreate?: user_userTypeCreateOrConnectWithoutUserTypeInput | user_userTypeCreateOrConnectWithoutUserTypeInput[]
    upsert?: user_userTypeUpsertWithWhereUniqueWithoutUserTypeInput | user_userTypeUpsertWithWhereUniqueWithoutUserTypeInput[]
    createMany?: user_userTypeCreateManyUserTypeInputEnvelope
    set?: user_userTypeWhereUniqueInput | user_userTypeWhereUniqueInput[]
    disconnect?: user_userTypeWhereUniqueInput | user_userTypeWhereUniqueInput[]
    delete?: user_userTypeWhereUniqueInput | user_userTypeWhereUniqueInput[]
    connect?: user_userTypeWhereUniqueInput | user_userTypeWhereUniqueInput[]
    update?: user_userTypeUpdateWithWhereUniqueWithoutUserTypeInput | user_userTypeUpdateWithWhereUniqueWithoutUserTypeInput[]
    updateMany?: user_userTypeUpdateManyWithWhereWithoutUserTypeInput | user_userTypeUpdateManyWithWhereWithoutUserTypeInput[]
    deleteMany?: user_userTypeScalarWhereInput | user_userTypeScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutUserTypesInput = {
    create?: XOR<userCreateWithoutUserTypesInput, userUncheckedCreateWithoutUserTypesInput>
    connectOrCreate?: userCreateOrConnectWithoutUserTypesInput
    connect?: userWhereUniqueInput
  }

  export type userTypesCreateNestedOneWithoutUsersInput = {
    create?: XOR<userTypesCreateWithoutUsersInput, userTypesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: userTypesCreateOrConnectWithoutUsersInput
    connect?: userTypesWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutUserTypesNestedInput = {
    create?: XOR<userCreateWithoutUserTypesInput, userUncheckedCreateWithoutUserTypesInput>
    connectOrCreate?: userCreateOrConnectWithoutUserTypesInput
    upsert?: userUpsertWithoutUserTypesInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutUserTypesInput, userUpdateWithoutUserTypesInput>, userUncheckedUpdateWithoutUserTypesInput>
  }

  export type userTypesUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<userTypesCreateWithoutUsersInput, userTypesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: userTypesCreateOrConnectWithoutUsersInput
    upsert?: userTypesUpsertWithoutUsersInput
    connect?: userTypesWhereUniqueInput
    update?: XOR<XOR<userTypesUpdateToOneWithWhereWithoutUsersInput, userTypesUpdateWithoutUsersInput>, userTypesUncheckedUpdateWithoutUsersInput>
  }

  export type user_userRoleCreateNestedManyWithoutUserRoleInput = {
    create?: XOR<user_userRoleCreateWithoutUserRoleInput, user_userRoleUncheckedCreateWithoutUserRoleInput> | user_userRoleCreateWithoutUserRoleInput[] | user_userRoleUncheckedCreateWithoutUserRoleInput[]
    connectOrCreate?: user_userRoleCreateOrConnectWithoutUserRoleInput | user_userRoleCreateOrConnectWithoutUserRoleInput[]
    createMany?: user_userRoleCreateManyUserRoleInputEnvelope
    connect?: user_userRoleWhereUniqueInput | user_userRoleWhereUniqueInput[]
  }

  export type user_userRoleUncheckedCreateNestedManyWithoutUserRoleInput = {
    create?: XOR<user_userRoleCreateWithoutUserRoleInput, user_userRoleUncheckedCreateWithoutUserRoleInput> | user_userRoleCreateWithoutUserRoleInput[] | user_userRoleUncheckedCreateWithoutUserRoleInput[]
    connectOrCreate?: user_userRoleCreateOrConnectWithoutUserRoleInput | user_userRoleCreateOrConnectWithoutUserRoleInput[]
    createMany?: user_userRoleCreateManyUserRoleInputEnvelope
    connect?: user_userRoleWhereUniqueInput | user_userRoleWhereUniqueInput[]
  }

  export type user_userRoleUpdateManyWithoutUserRoleNestedInput = {
    create?: XOR<user_userRoleCreateWithoutUserRoleInput, user_userRoleUncheckedCreateWithoutUserRoleInput> | user_userRoleCreateWithoutUserRoleInput[] | user_userRoleUncheckedCreateWithoutUserRoleInput[]
    connectOrCreate?: user_userRoleCreateOrConnectWithoutUserRoleInput | user_userRoleCreateOrConnectWithoutUserRoleInput[]
    upsert?: user_userRoleUpsertWithWhereUniqueWithoutUserRoleInput | user_userRoleUpsertWithWhereUniqueWithoutUserRoleInput[]
    createMany?: user_userRoleCreateManyUserRoleInputEnvelope
    set?: user_userRoleWhereUniqueInput | user_userRoleWhereUniqueInput[]
    disconnect?: user_userRoleWhereUniqueInput | user_userRoleWhereUniqueInput[]
    delete?: user_userRoleWhereUniqueInput | user_userRoleWhereUniqueInput[]
    connect?: user_userRoleWhereUniqueInput | user_userRoleWhereUniqueInput[]
    update?: user_userRoleUpdateWithWhereUniqueWithoutUserRoleInput | user_userRoleUpdateWithWhereUniqueWithoutUserRoleInput[]
    updateMany?: user_userRoleUpdateManyWithWhereWithoutUserRoleInput | user_userRoleUpdateManyWithWhereWithoutUserRoleInput[]
    deleteMany?: user_userRoleScalarWhereInput | user_userRoleScalarWhereInput[]
  }

  export type user_userRoleUncheckedUpdateManyWithoutUserRoleNestedInput = {
    create?: XOR<user_userRoleCreateWithoutUserRoleInput, user_userRoleUncheckedCreateWithoutUserRoleInput> | user_userRoleCreateWithoutUserRoleInput[] | user_userRoleUncheckedCreateWithoutUserRoleInput[]
    connectOrCreate?: user_userRoleCreateOrConnectWithoutUserRoleInput | user_userRoleCreateOrConnectWithoutUserRoleInput[]
    upsert?: user_userRoleUpsertWithWhereUniqueWithoutUserRoleInput | user_userRoleUpsertWithWhereUniqueWithoutUserRoleInput[]
    createMany?: user_userRoleCreateManyUserRoleInputEnvelope
    set?: user_userRoleWhereUniqueInput | user_userRoleWhereUniqueInput[]
    disconnect?: user_userRoleWhereUniqueInput | user_userRoleWhereUniqueInput[]
    delete?: user_userRoleWhereUniqueInput | user_userRoleWhereUniqueInput[]
    connect?: user_userRoleWhereUniqueInput | user_userRoleWhereUniqueInput[]
    update?: user_userRoleUpdateWithWhereUniqueWithoutUserRoleInput | user_userRoleUpdateWithWhereUniqueWithoutUserRoleInput[]
    updateMany?: user_userRoleUpdateManyWithWhereWithoutUserRoleInput | user_userRoleUpdateManyWithWhereWithoutUserRoleInput[]
    deleteMany?: user_userRoleScalarWhereInput | user_userRoleScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutUserRolesInput = {
    create?: XOR<userCreateWithoutUserRolesInput, userUncheckedCreateWithoutUserRolesInput>
    connectOrCreate?: userCreateOrConnectWithoutUserRolesInput
    connect?: userWhereUniqueInput
  }

  export type userRoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<userRoleCreateWithoutUsersInput, userRoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: userRoleCreateOrConnectWithoutUsersInput
    connect?: userRoleWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutUserRolesNestedInput = {
    create?: XOR<userCreateWithoutUserRolesInput, userUncheckedCreateWithoutUserRolesInput>
    connectOrCreate?: userCreateOrConnectWithoutUserRolesInput
    upsert?: userUpsertWithoutUserRolesInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutUserRolesInput, userUpdateWithoutUserRolesInput>, userUncheckedUpdateWithoutUserRolesInput>
  }

  export type userRoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<userRoleCreateWithoutUsersInput, userRoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: userRoleCreateOrConnectWithoutUsersInput
    upsert?: userRoleUpsertWithoutUsersInput
    connect?: userRoleWhereUniqueInput
    update?: XOR<XOR<userRoleUpdateToOneWithWhereWithoutUsersInput, userRoleUpdateWithoutUsersInput>, userRoleUncheckedUpdateWithoutUsersInput>
  }

  export type user_departmentCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<user_departmentCreateWithoutDepartmentInput, user_departmentUncheckedCreateWithoutDepartmentInput> | user_departmentCreateWithoutDepartmentInput[] | user_departmentUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: user_departmentCreateOrConnectWithoutDepartmentInput | user_departmentCreateOrConnectWithoutDepartmentInput[]
    createMany?: user_departmentCreateManyDepartmentInputEnvelope
    connect?: user_departmentWhereUniqueInput | user_departmentWhereUniqueInput[]
  }

  export type user_departmentUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<user_departmentCreateWithoutDepartmentInput, user_departmentUncheckedCreateWithoutDepartmentInput> | user_departmentCreateWithoutDepartmentInput[] | user_departmentUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: user_departmentCreateOrConnectWithoutDepartmentInput | user_departmentCreateOrConnectWithoutDepartmentInput[]
    createMany?: user_departmentCreateManyDepartmentInputEnvelope
    connect?: user_departmentWhereUniqueInput | user_departmentWhereUniqueInput[]
  }

  export type user_departmentUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<user_departmentCreateWithoutDepartmentInput, user_departmentUncheckedCreateWithoutDepartmentInput> | user_departmentCreateWithoutDepartmentInput[] | user_departmentUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: user_departmentCreateOrConnectWithoutDepartmentInput | user_departmentCreateOrConnectWithoutDepartmentInput[]
    upsert?: user_departmentUpsertWithWhereUniqueWithoutDepartmentInput | user_departmentUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: user_departmentCreateManyDepartmentInputEnvelope
    set?: user_departmentWhereUniqueInput | user_departmentWhereUniqueInput[]
    disconnect?: user_departmentWhereUniqueInput | user_departmentWhereUniqueInput[]
    delete?: user_departmentWhereUniqueInput | user_departmentWhereUniqueInput[]
    connect?: user_departmentWhereUniqueInput | user_departmentWhereUniqueInput[]
    update?: user_departmentUpdateWithWhereUniqueWithoutDepartmentInput | user_departmentUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: user_departmentUpdateManyWithWhereWithoutDepartmentInput | user_departmentUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: user_departmentScalarWhereInput | user_departmentScalarWhereInput[]
  }

  export type user_departmentUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<user_departmentCreateWithoutDepartmentInput, user_departmentUncheckedCreateWithoutDepartmentInput> | user_departmentCreateWithoutDepartmentInput[] | user_departmentUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: user_departmentCreateOrConnectWithoutDepartmentInput | user_departmentCreateOrConnectWithoutDepartmentInput[]
    upsert?: user_departmentUpsertWithWhereUniqueWithoutDepartmentInput | user_departmentUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: user_departmentCreateManyDepartmentInputEnvelope
    set?: user_departmentWhereUniqueInput | user_departmentWhereUniqueInput[]
    disconnect?: user_departmentWhereUniqueInput | user_departmentWhereUniqueInput[]
    delete?: user_departmentWhereUniqueInput | user_departmentWhereUniqueInput[]
    connect?: user_departmentWhereUniqueInput | user_departmentWhereUniqueInput[]
    update?: user_departmentUpdateWithWhereUniqueWithoutDepartmentInput | user_departmentUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: user_departmentUpdateManyWithWhereWithoutDepartmentInput | user_departmentUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: user_departmentScalarWhereInput | user_departmentScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutDepartmentsInput = {
    create?: XOR<userCreateWithoutDepartmentsInput, userUncheckedCreateWithoutDepartmentsInput>
    connectOrCreate?: userCreateOrConnectWithoutDepartmentsInput
    connect?: userWhereUniqueInput
  }

  export type departmentCreateNestedOneWithoutUsersInput = {
    create?: XOR<departmentCreateWithoutUsersInput, departmentUncheckedCreateWithoutUsersInput>
    connectOrCreate?: departmentCreateOrConnectWithoutUsersInput
    connect?: departmentWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutDepartmentsNestedInput = {
    create?: XOR<userCreateWithoutDepartmentsInput, userUncheckedCreateWithoutDepartmentsInput>
    connectOrCreate?: userCreateOrConnectWithoutDepartmentsInput
    upsert?: userUpsertWithoutDepartmentsInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutDepartmentsInput, userUpdateWithoutDepartmentsInput>, userUncheckedUpdateWithoutDepartmentsInput>
  }

  export type departmentUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<departmentCreateWithoutUsersInput, departmentUncheckedCreateWithoutUsersInput>
    connectOrCreate?: departmentCreateOrConnectWithoutUsersInput
    upsert?: departmentUpsertWithoutUsersInput
    connect?: departmentWhereUniqueInput
    update?: XOR<XOR<departmentUpdateToOneWithWhereWithoutUsersInput, departmentUpdateWithoutUsersInput>, departmentUncheckedUpdateWithoutUsersInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type user_userTypeCreateWithoutUserInput = {
    userType: userTypesCreateNestedOneWithoutUsersInput
  }

  export type user_userTypeUncheckedCreateWithoutUserInput = {
    id?: number
    usertypeId: number
  }

  export type user_userTypeCreateOrConnectWithoutUserInput = {
    where: user_userTypeWhereUniqueInput
    create: XOR<user_userTypeCreateWithoutUserInput, user_userTypeUncheckedCreateWithoutUserInput>
  }

  export type user_userTypeCreateManyUserInputEnvelope = {
    data: user_userTypeCreateManyUserInput | user_userTypeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type user_userRoleCreateWithoutUserInput = {
    userRole: userRoleCreateNestedOneWithoutUsersInput
  }

  export type user_userRoleUncheckedCreateWithoutUserInput = {
    id?: number
    userRoleId: number
  }

  export type user_userRoleCreateOrConnectWithoutUserInput = {
    where: user_userRoleWhereUniqueInput
    create: XOR<user_userRoleCreateWithoutUserInput, user_userRoleUncheckedCreateWithoutUserInput>
  }

  export type user_userRoleCreateManyUserInputEnvelope = {
    data: user_userRoleCreateManyUserInput | user_userRoleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type user_departmentCreateWithoutUserInput = {
    department: departmentCreateNestedOneWithoutUsersInput
  }

  export type user_departmentUncheckedCreateWithoutUserInput = {
    id?: number
    departmentId: number
  }

  export type user_departmentCreateOrConnectWithoutUserInput = {
    where: user_departmentWhereUniqueInput
    create: XOR<user_departmentCreateWithoutUserInput, user_departmentUncheckedCreateWithoutUserInput>
  }

  export type user_departmentCreateManyUserInputEnvelope = {
    data: user_departmentCreateManyUserInput | user_departmentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type user_userTypeUpsertWithWhereUniqueWithoutUserInput = {
    where: user_userTypeWhereUniqueInput
    update: XOR<user_userTypeUpdateWithoutUserInput, user_userTypeUncheckedUpdateWithoutUserInput>
    create: XOR<user_userTypeCreateWithoutUserInput, user_userTypeUncheckedCreateWithoutUserInput>
  }

  export type user_userTypeUpdateWithWhereUniqueWithoutUserInput = {
    where: user_userTypeWhereUniqueInput
    data: XOR<user_userTypeUpdateWithoutUserInput, user_userTypeUncheckedUpdateWithoutUserInput>
  }

  export type user_userTypeUpdateManyWithWhereWithoutUserInput = {
    where: user_userTypeScalarWhereInput
    data: XOR<user_userTypeUpdateManyMutationInput, user_userTypeUncheckedUpdateManyWithoutUserInput>
  }

  export type user_userTypeScalarWhereInput = {
    AND?: user_userTypeScalarWhereInput | user_userTypeScalarWhereInput[]
    OR?: user_userTypeScalarWhereInput[]
    NOT?: user_userTypeScalarWhereInput | user_userTypeScalarWhereInput[]
    id?: IntFilter<"user_userType"> | number
    userId?: IntFilter<"user_userType"> | number
    usertypeId?: IntFilter<"user_userType"> | number
  }

  export type user_userRoleUpsertWithWhereUniqueWithoutUserInput = {
    where: user_userRoleWhereUniqueInput
    update: XOR<user_userRoleUpdateWithoutUserInput, user_userRoleUncheckedUpdateWithoutUserInput>
    create: XOR<user_userRoleCreateWithoutUserInput, user_userRoleUncheckedCreateWithoutUserInput>
  }

  export type user_userRoleUpdateWithWhereUniqueWithoutUserInput = {
    where: user_userRoleWhereUniqueInput
    data: XOR<user_userRoleUpdateWithoutUserInput, user_userRoleUncheckedUpdateWithoutUserInput>
  }

  export type user_userRoleUpdateManyWithWhereWithoutUserInput = {
    where: user_userRoleScalarWhereInput
    data: XOR<user_userRoleUpdateManyMutationInput, user_userRoleUncheckedUpdateManyWithoutUserInput>
  }

  export type user_userRoleScalarWhereInput = {
    AND?: user_userRoleScalarWhereInput | user_userRoleScalarWhereInput[]
    OR?: user_userRoleScalarWhereInput[]
    NOT?: user_userRoleScalarWhereInput | user_userRoleScalarWhereInput[]
    id?: IntFilter<"user_userRole"> | number
    userId?: IntFilter<"user_userRole"> | number
    userRoleId?: IntFilter<"user_userRole"> | number
  }

  export type user_departmentUpsertWithWhereUniqueWithoutUserInput = {
    where: user_departmentWhereUniqueInput
    update: XOR<user_departmentUpdateWithoutUserInput, user_departmentUncheckedUpdateWithoutUserInput>
    create: XOR<user_departmentCreateWithoutUserInput, user_departmentUncheckedCreateWithoutUserInput>
  }

  export type user_departmentUpdateWithWhereUniqueWithoutUserInput = {
    where: user_departmentWhereUniqueInput
    data: XOR<user_departmentUpdateWithoutUserInput, user_departmentUncheckedUpdateWithoutUserInput>
  }

  export type user_departmentUpdateManyWithWhereWithoutUserInput = {
    where: user_departmentScalarWhereInput
    data: XOR<user_departmentUpdateManyMutationInput, user_departmentUncheckedUpdateManyWithoutUserInput>
  }

  export type user_departmentScalarWhereInput = {
    AND?: user_departmentScalarWhereInput | user_departmentScalarWhereInput[]
    OR?: user_departmentScalarWhereInput[]
    NOT?: user_departmentScalarWhereInput | user_departmentScalarWhereInput[]
    id?: IntFilter<"user_department"> | number
    userId?: IntFilter<"user_department"> | number
    departmentId?: IntFilter<"user_department"> | number
  }

  export type user_userTypeCreateWithoutUserTypeInput = {
    user: userCreateNestedOneWithoutUserTypesInput
  }

  export type user_userTypeUncheckedCreateWithoutUserTypeInput = {
    id?: number
    userId: number
  }

  export type user_userTypeCreateOrConnectWithoutUserTypeInput = {
    where: user_userTypeWhereUniqueInput
    create: XOR<user_userTypeCreateWithoutUserTypeInput, user_userTypeUncheckedCreateWithoutUserTypeInput>
  }

  export type user_userTypeCreateManyUserTypeInputEnvelope = {
    data: user_userTypeCreateManyUserTypeInput | user_userTypeCreateManyUserTypeInput[]
    skipDuplicates?: boolean
  }

  export type user_userTypeUpsertWithWhereUniqueWithoutUserTypeInput = {
    where: user_userTypeWhereUniqueInput
    update: XOR<user_userTypeUpdateWithoutUserTypeInput, user_userTypeUncheckedUpdateWithoutUserTypeInput>
    create: XOR<user_userTypeCreateWithoutUserTypeInput, user_userTypeUncheckedCreateWithoutUserTypeInput>
  }

  export type user_userTypeUpdateWithWhereUniqueWithoutUserTypeInput = {
    where: user_userTypeWhereUniqueInput
    data: XOR<user_userTypeUpdateWithoutUserTypeInput, user_userTypeUncheckedUpdateWithoutUserTypeInput>
  }

  export type user_userTypeUpdateManyWithWhereWithoutUserTypeInput = {
    where: user_userTypeScalarWhereInput
    data: XOR<user_userTypeUpdateManyMutationInput, user_userTypeUncheckedUpdateManyWithoutUserTypeInput>
  }

  export type userCreateWithoutUserTypesInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    address: string
    phone: string
    isApproved?: boolean
    isActive?: boolean
    isAvailable?: boolean
    currentTickets?: number
    createdAt?: Date | string
    userRoles?: user_userRoleCreateNestedManyWithoutUserInput
    departments?: user_departmentCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutUserTypesInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    address: string
    phone: string
    isApproved?: boolean
    isActive?: boolean
    isAvailable?: boolean
    currentTickets?: number
    createdAt?: Date | string
    userRoles?: user_userRoleUncheckedCreateNestedManyWithoutUserInput
    departments?: user_departmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutUserTypesInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutUserTypesInput, userUncheckedCreateWithoutUserTypesInput>
  }

  export type userTypesCreateWithoutUsersInput = {
    userTypeName: string
    createdAt?: Date | string
    isActive?: boolean
  }

  export type userTypesUncheckedCreateWithoutUsersInput = {
    id?: number
    userTypeName: string
    createdAt?: Date | string
    isActive?: boolean
  }

  export type userTypesCreateOrConnectWithoutUsersInput = {
    where: userTypesWhereUniqueInput
    create: XOR<userTypesCreateWithoutUsersInput, userTypesUncheckedCreateWithoutUsersInput>
  }

  export type userUpsertWithoutUserTypesInput = {
    update: XOR<userUpdateWithoutUserTypesInput, userUncheckedUpdateWithoutUserTypesInput>
    create: XOR<userCreateWithoutUserTypesInput, userUncheckedCreateWithoutUserTypesInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutUserTypesInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutUserTypesInput, userUncheckedUpdateWithoutUserTypesInput>
  }

  export type userUpdateWithoutUserTypesInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    currentTickets?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userRoles?: user_userRoleUpdateManyWithoutUserNestedInput
    departments?: user_departmentUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutUserTypesInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    currentTickets?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userRoles?: user_userRoleUncheckedUpdateManyWithoutUserNestedInput
    departments?: user_departmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userTypesUpsertWithoutUsersInput = {
    update: XOR<userTypesUpdateWithoutUsersInput, userTypesUncheckedUpdateWithoutUsersInput>
    create: XOR<userTypesCreateWithoutUsersInput, userTypesUncheckedCreateWithoutUsersInput>
    where?: userTypesWhereInput
  }

  export type userTypesUpdateToOneWithWhereWithoutUsersInput = {
    where?: userTypesWhereInput
    data: XOR<userTypesUpdateWithoutUsersInput, userTypesUncheckedUpdateWithoutUsersInput>
  }

  export type userTypesUpdateWithoutUsersInput = {
    userTypeName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type userTypesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    userTypeName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type user_userRoleCreateWithoutUserRoleInput = {
    user: userCreateNestedOneWithoutUserRolesInput
  }

  export type user_userRoleUncheckedCreateWithoutUserRoleInput = {
    id?: number
    userId: number
  }

  export type user_userRoleCreateOrConnectWithoutUserRoleInput = {
    where: user_userRoleWhereUniqueInput
    create: XOR<user_userRoleCreateWithoutUserRoleInput, user_userRoleUncheckedCreateWithoutUserRoleInput>
  }

  export type user_userRoleCreateManyUserRoleInputEnvelope = {
    data: user_userRoleCreateManyUserRoleInput | user_userRoleCreateManyUserRoleInput[]
    skipDuplicates?: boolean
  }

  export type user_userRoleUpsertWithWhereUniqueWithoutUserRoleInput = {
    where: user_userRoleWhereUniqueInput
    update: XOR<user_userRoleUpdateWithoutUserRoleInput, user_userRoleUncheckedUpdateWithoutUserRoleInput>
    create: XOR<user_userRoleCreateWithoutUserRoleInput, user_userRoleUncheckedCreateWithoutUserRoleInput>
  }

  export type user_userRoleUpdateWithWhereUniqueWithoutUserRoleInput = {
    where: user_userRoleWhereUniqueInput
    data: XOR<user_userRoleUpdateWithoutUserRoleInput, user_userRoleUncheckedUpdateWithoutUserRoleInput>
  }

  export type user_userRoleUpdateManyWithWhereWithoutUserRoleInput = {
    where: user_userRoleScalarWhereInput
    data: XOR<user_userRoleUpdateManyMutationInput, user_userRoleUncheckedUpdateManyWithoutUserRoleInput>
  }

  export type userCreateWithoutUserRolesInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    address: string
    phone: string
    isApproved?: boolean
    isActive?: boolean
    isAvailable?: boolean
    currentTickets?: number
    createdAt?: Date | string
    userTypes?: user_userTypeCreateNestedManyWithoutUserInput
    departments?: user_departmentCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutUserRolesInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    address: string
    phone: string
    isApproved?: boolean
    isActive?: boolean
    isAvailable?: boolean
    currentTickets?: number
    createdAt?: Date | string
    userTypes?: user_userTypeUncheckedCreateNestedManyWithoutUserInput
    departments?: user_departmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutUserRolesInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutUserRolesInput, userUncheckedCreateWithoutUserRolesInput>
  }

  export type userRoleCreateWithoutUsersInput = {
    userRoleName: string
    createdAt?: Date | string
    isActive?: boolean
  }

  export type userRoleUncheckedCreateWithoutUsersInput = {
    id?: number
    userRoleName: string
    createdAt?: Date | string
    isActive?: boolean
  }

  export type userRoleCreateOrConnectWithoutUsersInput = {
    where: userRoleWhereUniqueInput
    create: XOR<userRoleCreateWithoutUsersInput, userRoleUncheckedCreateWithoutUsersInput>
  }

  export type userUpsertWithoutUserRolesInput = {
    update: XOR<userUpdateWithoutUserRolesInput, userUncheckedUpdateWithoutUserRolesInput>
    create: XOR<userCreateWithoutUserRolesInput, userUncheckedCreateWithoutUserRolesInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutUserRolesInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutUserRolesInput, userUncheckedUpdateWithoutUserRolesInput>
  }

  export type userUpdateWithoutUserRolesInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    currentTickets?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userTypes?: user_userTypeUpdateManyWithoutUserNestedInput
    departments?: user_departmentUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutUserRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    currentTickets?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userTypes?: user_userTypeUncheckedUpdateManyWithoutUserNestedInput
    departments?: user_departmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userRoleUpsertWithoutUsersInput = {
    update: XOR<userRoleUpdateWithoutUsersInput, userRoleUncheckedUpdateWithoutUsersInput>
    create: XOR<userRoleCreateWithoutUsersInput, userRoleUncheckedCreateWithoutUsersInput>
    where?: userRoleWhereInput
  }

  export type userRoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: userRoleWhereInput
    data: XOR<userRoleUpdateWithoutUsersInput, userRoleUncheckedUpdateWithoutUsersInput>
  }

  export type userRoleUpdateWithoutUsersInput = {
    userRoleName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type userRoleUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    userRoleName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type user_departmentCreateWithoutDepartmentInput = {
    user: userCreateNestedOneWithoutDepartmentsInput
  }

  export type user_departmentUncheckedCreateWithoutDepartmentInput = {
    id?: number
    userId: number
  }

  export type user_departmentCreateOrConnectWithoutDepartmentInput = {
    where: user_departmentWhereUniqueInput
    create: XOR<user_departmentCreateWithoutDepartmentInput, user_departmentUncheckedCreateWithoutDepartmentInput>
  }

  export type user_departmentCreateManyDepartmentInputEnvelope = {
    data: user_departmentCreateManyDepartmentInput | user_departmentCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type user_departmentUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: user_departmentWhereUniqueInput
    update: XOR<user_departmentUpdateWithoutDepartmentInput, user_departmentUncheckedUpdateWithoutDepartmentInput>
    create: XOR<user_departmentCreateWithoutDepartmentInput, user_departmentUncheckedCreateWithoutDepartmentInput>
  }

  export type user_departmentUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: user_departmentWhereUniqueInput
    data: XOR<user_departmentUpdateWithoutDepartmentInput, user_departmentUncheckedUpdateWithoutDepartmentInput>
  }

  export type user_departmentUpdateManyWithWhereWithoutDepartmentInput = {
    where: user_departmentScalarWhereInput
    data: XOR<user_departmentUpdateManyMutationInput, user_departmentUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type userCreateWithoutDepartmentsInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    address: string
    phone: string
    isApproved?: boolean
    isActive?: boolean
    isAvailable?: boolean
    currentTickets?: number
    createdAt?: Date | string
    userTypes?: user_userTypeCreateNestedManyWithoutUserInput
    userRoles?: user_userRoleCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutDepartmentsInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    address: string
    phone: string
    isApproved?: boolean
    isActive?: boolean
    isAvailable?: boolean
    currentTickets?: number
    createdAt?: Date | string
    userTypes?: user_userTypeUncheckedCreateNestedManyWithoutUserInput
    userRoles?: user_userRoleUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutDepartmentsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutDepartmentsInput, userUncheckedCreateWithoutDepartmentsInput>
  }

  export type departmentCreateWithoutUsersInput = {
    departmentName: string
    createdAt?: Date | string
    isActive?: boolean
  }

  export type departmentUncheckedCreateWithoutUsersInput = {
    id?: number
    departmentName: string
    createdAt?: Date | string
    isActive?: boolean
  }

  export type departmentCreateOrConnectWithoutUsersInput = {
    where: departmentWhereUniqueInput
    create: XOR<departmentCreateWithoutUsersInput, departmentUncheckedCreateWithoutUsersInput>
  }

  export type userUpsertWithoutDepartmentsInput = {
    update: XOR<userUpdateWithoutDepartmentsInput, userUncheckedUpdateWithoutDepartmentsInput>
    create: XOR<userCreateWithoutDepartmentsInput, userUncheckedCreateWithoutDepartmentsInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutDepartmentsInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutDepartmentsInput, userUncheckedUpdateWithoutDepartmentsInput>
  }

  export type userUpdateWithoutDepartmentsInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    currentTickets?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userTypes?: user_userTypeUpdateManyWithoutUserNestedInput
    userRoles?: user_userRoleUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutDepartmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isApproved?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    currentTickets?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userTypes?: user_userTypeUncheckedUpdateManyWithoutUserNestedInput
    userRoles?: user_userRoleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type departmentUpsertWithoutUsersInput = {
    update: XOR<departmentUpdateWithoutUsersInput, departmentUncheckedUpdateWithoutUsersInput>
    create: XOR<departmentCreateWithoutUsersInput, departmentUncheckedCreateWithoutUsersInput>
    where?: departmentWhereInput
  }

  export type departmentUpdateToOneWithWhereWithoutUsersInput = {
    where?: departmentWhereInput
    data: XOR<departmentUpdateWithoutUsersInput, departmentUncheckedUpdateWithoutUsersInput>
  }

  export type departmentUpdateWithoutUsersInput = {
    departmentName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type departmentUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    departmentName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type user_userTypeCreateManyUserInput = {
    id?: number
    usertypeId: number
  }

  export type user_userRoleCreateManyUserInput = {
    id?: number
    userRoleId: number
  }

  export type user_departmentCreateManyUserInput = {
    id?: number
    departmentId: number
  }

  export type user_userTypeUpdateWithoutUserInput = {
    userType?: userTypesUpdateOneRequiredWithoutUsersNestedInput
  }

  export type user_userTypeUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    usertypeId?: IntFieldUpdateOperationsInput | number
  }

  export type user_userTypeUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    usertypeId?: IntFieldUpdateOperationsInput | number
  }

  export type user_userRoleUpdateWithoutUserInput = {
    userRole?: userRoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type user_userRoleUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    userRoleId?: IntFieldUpdateOperationsInput | number
  }

  export type user_userRoleUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    userRoleId?: IntFieldUpdateOperationsInput | number
  }

  export type user_departmentUpdateWithoutUserInput = {
    department?: departmentUpdateOneRequiredWithoutUsersNestedInput
  }

  export type user_departmentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    departmentId?: IntFieldUpdateOperationsInput | number
  }

  export type user_departmentUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    departmentId?: IntFieldUpdateOperationsInput | number
  }

  export type user_userTypeCreateManyUserTypeInput = {
    id?: number
    userId: number
  }

  export type user_userTypeUpdateWithoutUserTypeInput = {
    user?: userUpdateOneRequiredWithoutUserTypesNestedInput
  }

  export type user_userTypeUncheckedUpdateWithoutUserTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type user_userTypeUncheckedUpdateManyWithoutUserTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type user_userRoleCreateManyUserRoleInput = {
    id?: number
    userId: number
  }

  export type user_userRoleUpdateWithoutUserRoleInput = {
    user?: userUpdateOneRequiredWithoutUserRolesNestedInput
  }

  export type user_userRoleUncheckedUpdateWithoutUserRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type user_userRoleUncheckedUpdateManyWithoutUserRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type user_departmentCreateManyDepartmentInput = {
    id?: number
    userId: number
  }

  export type user_departmentUpdateWithoutDepartmentInput = {
    user?: userUpdateOneRequiredWithoutDepartmentsNestedInput
  }

  export type user_departmentUncheckedUpdateWithoutDepartmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type user_departmentUncheckedUpdateManyWithoutDepartmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}