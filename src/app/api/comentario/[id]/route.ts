import { authorSelect, postInCommentSelect } from "@/shared/IPost";
import db from "../../../../../prisma/db";
import { NextResponse } from "next/server";

export async function GET(_request: Request, { params }: { params: { id: string } }) {
    const replies = await db.comentario.findMany({
        where: {
            parentId: Number(params.id)
        },
        orderBy: { createdAt: "asc" },
        select: {
            id: true, texto: true, createdAt: true, updatedAt: true, parentId: true,
            author: authorSelect,
            post: postInCommentSelect,
        },
    })

    return NextResponse.json(replies)
}