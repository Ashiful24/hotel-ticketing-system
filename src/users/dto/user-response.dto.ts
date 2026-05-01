import { UserType } from "@prisma/client"
import { Expose } from "class-transformer"

export class UserResponseDto {

    @Expose()
    id: string

    @Expose()
    firstName?: string

    @Expose()
    lastName?: string

    @Expose()
    email: string

    @Expose()
    phone?: string

    @Expose()
    nid: string

    @Expose()
    address: string

    @Expose()
    profileImg: string

    @Expose()
    userType: UserType

    @Expose()
    createdAt: Date

    @Expose()
    updatedAt: Date
}