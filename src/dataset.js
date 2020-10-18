const defaultDataset = {
  "init": {
      answers: [
          {content: "仕事を依頼したい", nextId: "job_offer"},
          {content: "Bloom PJTに入りたい", nextId: "community"},
          {content: "お付き合いしたい", nextId: "dating"},
      ],
      question: "こんにちは！大谷へのご用件はなんでしょうか？",
  },
  "job_offer": {
      answers: [
          {content: "Webサイトを制作してほしい", nextId: "website"},
          {content: "Webアプリを開発してほしい", nextId: "webapp"},
          {content: "自動化ツールを作ってほしい", nextId: "automation_tool"},
          {content: "その他", nextId: "other_jobs"}
      ],
      question: "どのようなお仕事でしょうか？",
  },
  "website": {
      answers: [
          {content: "問い合わせる", nextId: "contact"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "Webサイト細作についてですね。コチラからお問い合わせできます。",
  },
  "webapp": {
      answers: [
          {content: "問い合わせる", nextId: "contact"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "Webアプリ開発についてですね。コチラからお問い合わせできます。",
  },
  "automation_tool": {
      answers: [
          {content: "問い合わせる", nextId: "contact"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "自動化ツール開発についてですね。コチラからお問い合わせできます。",
  },
  "other_jobs": {
      answers: [
          {content: "問い合わせる", nextId: "contact"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "その他についてですね。コチラからお問い合わせできます。",
  },
  "community": {
      answers: [
          {content: "どんな活動をしているの？", nextId: "community_activity"},
          {content: "Bloom PJTに入りたい", nextId: "https://form.run/@bloompjt-kotasaito-3981"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "2020年7月にHPが新しくなりました！そこでは練習日程などを載せているのでよろしければ確認してみてください！",
  },
  "community_activity": {
      answers: [
          {content: "さらに詳細を知りたい", nextId: "https://bloompjt.jp/"},
          {content: "instagramを確認する", nextId: "https://www.instagram.com/bloompjt/"},
          {content: "Bloom PJTに入りたい", nextId: "https://form.run/@bloompjt-kotasaito-3981"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "instagramでも試合の結果などを随時載せています！",
  },
  "dating": {
      answers: [
          {content: "DMする", nextId: "https://twitter.com/yueicet"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "まずは一緒にランチでもいかがですか？DMしてください😘",
  },
}

export default defaultDataset
