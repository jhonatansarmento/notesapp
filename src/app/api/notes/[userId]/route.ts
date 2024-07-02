import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(
  req: NextRequest,
  { params }: { params: { userId: string } }
) {
  const { userId } = params;

  try {
    const notes = await prisma.note.findMany({
      where: { userId },
      include: { category: true },
    });
    return NextResponse.json(notes, { status: 200 });
  } catch (error) {
    console.error('Erro ao obter notas:', error);
    return NextResponse.json({ error: 'Erro ao obter notas' }, { status: 500 });
  }
}
