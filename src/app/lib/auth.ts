import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { Prisma, Role, Status } from "../../generated/prisma/client";

export const auth = betterAuth({
    database: prismaAdapter(Prisma, {
        provider: "postgresql", // or "mysql", "sqlite", ...etc
    }),
    emailAndPassword: {
        enabled: true,
    },
    user: {
        additionalFields: {
            role: {
                type: "string",
                default: Role.PATIENT,
                required: false,
            },
            status: {
                type: "string",
                default: Status.ACTIVE,
                required: false,
            },
            needPasswordChange: {
                type: "boolean",
                default: false,
                required: false,
            },
            deletedAt: {
                type: "date",
                default: null,
                required: false,
            },
            isDeleted: {
                type: "boolean",
                default: false,
                required: false,
            }
        }
    }
});