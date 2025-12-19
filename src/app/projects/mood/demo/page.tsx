export default function TodayMoodDemo() {
  return (
    <section style={{ padding: "120px 80px", maxWidth: 900 }}>
      <h1>Today’s Mood</h1>

      <p style={{ margin: "20px 0", lineHeight: 1.6 }}>
        Today’s Mood는 하루의 컨디션과 감정을 간단히 기록하고, 날씨 정보와 함께
        시각적으로 확인할 수 있도록 만든 개인 프로젝트입니다.
      </p>

      <ul style={{ margin: "20px 0" }}>
        <li>• React / TypeScript 기반</li>
        <li>• 상태 관리 및 컴포넌트 분리 연습</li>
        <li>• 감정 기록 + 날씨 정보 시각화</li>
      </ul>

      <div style={{ marginTop: 40 }}>
        <a
          href="https://github.com/leemet97/todays-mood"
          target="_blank"
          style={{ marginRight: 20 }}
        >
          🔗 GitHub Repository
        </a>

        <a href="https://today-mood-demo.vercel.app" target="_blank">
          ▶ Live Demo
        </a>
      </div>
    </section>
  );
}
