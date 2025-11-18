import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { FirebaseService } from '../firebase/firebase.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly firebase: FirebaseService,
  ) {}

  async loginWithIdToken(idToken: string) {
    // ① Firebase でトークン検証
    const decoded = await this.firebase.verifyIdToken(idToken);

    const uid = decoded.uid;
    const email = decoded.email ?? null;
    const displayName = (decoded as any).name ?? null;

    // ② DB 上のユーザーを検索（主キーは uid）
    let user = await this.prisma.user.findUnique({
      where: { id: uid },
    });

    // ③ なければ新規作成（初回ログイン）
    if (!user) {
      user = await this.prisma.user.create({
        data: {
          id: uid,
          email,
          displayName,
        },
      });
    }

    // 必要ならここでアプリ用のトークンを作るけど、
    // 今はとりあえず DB の User を返すだけにしておく
    return user;
  }
}