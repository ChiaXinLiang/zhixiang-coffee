import { prisma } from "@/lib/prisma";

export async function getUserFromDb(email: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        password: true,
      },
    });

    return user;
  } catch (error) {
    console.error("Database error:", error);
    throw error;
  }
}
