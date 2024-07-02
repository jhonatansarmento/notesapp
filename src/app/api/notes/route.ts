import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const { title, content, categoryId, userId } = await req.json();

  try {
    const note = await prisma.note.create({
      data: {
        title,
        content,
        categoryId,
        userId,
      },
    });
    return NextResponse.json(note, { status: 201 });
  } catch (error) {
    console.error('Erro ao criar nota:', error);
    return NextResponse.json({ error: 'Erro ao criar nota' }, { status: 500 });
  }
}
