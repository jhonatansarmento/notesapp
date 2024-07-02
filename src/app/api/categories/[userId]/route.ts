import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(
  req: NextRequest,
  { params }: { params: { userId: string } }
) {
  const { userId } = params;

  try {
    const categories = await prisma.category.findMany({
      where: {
        notes: {
          some: {
            userId,
          },
        },
      },
    });
    return NextResponse.json(categories, { status: 200 });
  } catch (error) {
    console.error('Erro ao obter categorias:', error);
    return NextResponse.json(
      { error: 'Erro ao obter categorias' },
      { status: 500 }
    );
  }
}
