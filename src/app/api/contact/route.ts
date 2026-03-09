import { NextRequest, NextResponse } from 'next/server';

// Discord 웹훅으로 알림 전송
async function sendDiscordNotification(data: { name: string; phone: string; message: string }) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error('Discord webhook URL not configured');
    throw new Error('Discord webhook URL not configured');
  }

  const now = new Date();
  const koreaTime = new Intl.DateTimeFormat('ko-KR', {
    timeZone: 'Asia/Seoul',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }).format(now);

  const embed = {
    embeds: [
      {
        title: '🚀 새로운 상담 문의가 접수되었습니다!',
        color: 0x22c55e,
        fields: [
          {
            name: '👤 이름',
            value: data.name,
            inline: true
          },
          {
            name: '📞 전화번호',
            value: data.phone,
            inline: true
          },
          {
            name: '💬 문의 내용',
            value: data.message || '(내용 없음)',
            inline: false
          }
        ],
        footer: {
          text: '로켓콜-정책자금'
        },
        timestamp: now.toISOString()
      }
    ],
    content: `📋 **[정책자금]** 새 문의 접수 - ${koreaTime}`
  };

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(embed),
  });

  if (!response.ok) {
    throw new Error(`Discord webhook failed: ${response.status}`);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, message } = body;

    // 필수 필드 검증
    if (!name || !phone) {
      return NextResponse.json(
        { error: '이름과 전화번호는 필수입니다.' },
        { status: 400 }
      );
    }

    // Discord 알림 직접 전송
    await sendDiscordNotification({ name, phone, message });

    return NextResponse.json(
      { success: true, message: '상담 신청이 완료되었습니다.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
