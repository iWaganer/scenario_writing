"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

type Props = {
  params: { id: string };
};

type FileNode = {
  id: string;
  name: string;
  type: "dir" | "file";
  depth: number;
  mode?: "markdown" | "plain";
};

const mockTree: FileNode[] = [
  { id: "docs", name: "docs", type: "dir", depth: 0 },
  { id: "intro", name: "導入.md", type: "file", depth: 1, mode: "markdown" },
  { id: "outline", name: "全体構成.md", type: "file", depth: 1, mode: "markdown" },
  { id: "npc-dir", name: "npc", type: "dir", depth: 0 },
  { id: "npc-list", name: "NPC一覧.md", type: "file", depth: 1, mode: "markdown" },
  { id: "images", name: "images", type: "dir", depth: 0 },
  { id: "map", name: "map_ruins.png", type: "file", depth: 1 },
];

const initialContents: Record<string, string> = {
  intro: `# 導入メモ

・舞台：灰色の石でできた古代遺跡
・依頼人：大学の考古学教授（名前未定）
・目的：失踪した調査隊の捜索＋遺跡の安全確認

## 導入パターン案

1. 教授からの正式な依頼
2. 調査隊メンバーの家族からの相談
3. 掲示板・学内の募集チラシ など`,
  outline: `# シナリオ全体構成（ドラフト）

1. 導入
   - 依頼の提示
   - 調査隊に関する情報収集

2. 第1幕：遺跡周辺パート
   - 道中イベント（天候・NPC・トラブル）
   - キャンプ地での会話

3. 第2幕：遺跡内部パート
   - パズルギミック案
   - 敵対存在 or 罠の候補

4. クライマックス
   - 調査隊の真相
   - 遺跡の本当の目的

5. エピローグ
   - 教授・家族とのやりとり
   - 後日談フック`,
  "npc-list": `# NPC一覧（ドラフト）

## 教授（依頼人）
・年齢 / 性別：50代 / 男性
・性格：穏やかだが研究には貪欲
・秘密：実は遺跡に個人的な執着がある？

## 調査隊リーダー
・年齢 / 性別：30代 / 任意
・PLが演じてもよい立ち位置か検討中

## その他
・村人A
・村人B
・遺跡管理人（いるなら）`,
};

export default function ProjectEditPage({ params }: Props) {
  const projectId = params.id;
  const [selectedFileId, setSelectedFileId] = useState<string>("intro");
  const [contents, setContents] = useState<Record<string, string>>(
    () => ({ ...initialContents })
  );
  const [viewMode, setViewMode] = useState<"edit" | "preview">("edit");

  const selectedFile = mockTree.find(
    (node) => node.id === selectedFileId && node.type === "file"
  );
  const currentContent =
    (selectedFile && contents[selectedFile.id]) ??
    "// まだ内容がありません。ここに書き始めてください。";

  const handleContentChange = (value: string) => {
    if (!selectedFile) return;
    setContents((prev) => ({
      ...prev,
      [selectedFile.id]: value,
    }));
  };

  const handleSave = (e: FormEvent) => {
    e.preventDefault();
    console.log("save project:", {
      projectId,
      fileId: selectedFileId,
      content: currentContent,
    });
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* 上部ヘッダー（アプリ共通 */}
      <header className="border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-lg font-bold tracking-tight">
              ScenarioShelf
            </Link>
            <span className="rounded bg-slate-800 px-2 py-0.5 text-[10px] text-slate-300">
              editor
            </span>
          </div>

          <nav className="hidden items-center gap-4 text-sm text-slate-300 md:flex">
            <Link href="/workspace" className="hover:text-white">
              ホーム
            </Link>
            <Link href="/projects" className="hover:text-white">
              Myプロジェクト
            </Link>
            <Link href="/explore" className="hover:text-white">
              Explore
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/account"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-600 bg-slate-900 text-xs font-semibold text-slate-200 hover:border-indigo-400"
            >
              Y
            </Link>
          </div>
        </div>
      </header>

      {/* 下部：VSCodeっぽいレイアウト */}
      <div className="mx-auto flex max-w-6xl border-t border-slate-900 bg-slate-950">
        {/* 左：常時表示のツリー（VSCodeの EXPLORER 的なやつ） */}
        <aside className="flex h-[calc(100vh-4rem)] w-64 flex-shrink-0 flex-col border-r border-slate-800 bg-slate-950">
          {/* Explorer ヘッダー */}
          <div className="border-b border-slate-800 px-3 py-2 text-[10px] font-semibold uppercase tracking-wide text-slate-400">
            Explorer
          </div>

          {/* プロジェクト名 / ボタン */}
          <div className="flex items-center justify-between px-3 py-2 text-xs">
            <div className="max-w-[140px]">
              <p className="text-[10px] text-slate-500">Project</p>
              <p className="truncate text-slate-100">
                {decodeURIComponent(projectId)}
              </p>
            </div>
            <Link
              href={`/projects/${projectId}`}
              className="rounded border border-slate-700 px-2 py-1 text-[10px] text-slate-200 hover:border-indigo-400"
            >
              閲覧
            </Link>
          </div>

          {/* ファイルツリー（常に全体構造が見える） */}
          <div className="flex-1 overflow-auto px-2 pb-2 pt-1 text-xs text-slate-200">
            <ul className="space-y-0.5">
              {mockTree.map((node) => {
                const isSelected = node.id === selectedFileId;
                const indent = node.depth * 0.9;

                if (node.type === "dir") {
                  return (
                    <li
                      key={node.id}
                      style={{ paddingLeft: `${indent}rem` }}
                      className="flex items-center gap-1 rounded px-1.5 py-1 text-[11px] text-slate-300"
                    >
                      <span className="text-[10px] text-slate-500">▼</span>
                      <span className="font-semibold text-slate-100">
                        {node.name}/
                      </span>
                    </li>
                  );
                }

                return (
                  <li
                    key={node.id}
                    style={{ paddingLeft: `${indent + 0.9}rem` }}
                  >
                    <button
                      type="button"
                      onClick={() => setSelectedFileId(node.id)}
                      className={`flex w-full items-center gap-1 rounded px-1.5 py-0.5 text-left text-[11px] ${
                        isSelected
                          ? "bg-indigo-500/30 text-indigo-50"
                          : "text-slate-200 hover:bg-slate-800/70"
                      }`}
                    >
                      <span className="text-[10px] text-slate-500">●</span>
                      <span className="truncate">{node.name}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* 一番下：軽いステータスとか置ける場所（モック） */}
          <div className="border-t border-slate-800 px-3 py-1.5 text-[10px] text-slate-500">
            ファイル数: {mockTree.length}
          </div>
        </aside>

        {/* 右：エディタエリア（VSCodeっぽさ重視） */}
        <section className="flex h-[calc(100vh-4rem)] flex-1 flex-col bg-slate-950">
          {/* タブバー的な部分（簡易版） */}
          <div className="flex items-center gap-1 border-b border-slate-800 bg-slate-900/90 px-3 text-xs">
            <div className="flex items-center gap-1 rounded-t-md border-x border-t border-slate-800 bg-slate-950 px-3 py-1.5">
              <span className="text-[11px] text-slate-100">
                {selectedFile?.name ?? "ファイル未選択"}
              </span>
            </div>
          </div>

          {/* ファイル情報＋モード切替 */}
          <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/80 px-4 py-2 text-[11px]">
            <div className="space-y-0.5">
              <p className="text-slate-300">
                {selectedFile?.name ?? "ファイルを選択してください"}
              </p>
              <p className="text-slate-500">
                {selectedFile?.mode === "plain"
                  ? "通常テキストファイル"
                  : "Markdownとして編集（将来プレビュー強化）"}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-1 rounded-full border border-slate-700 bg-slate-950 px-1 py-0.5">
                <button
                  type="button"
                  onClick={() => setViewMode("edit")}
                  className={`rounded-full px-2 py-0.5 text-[10px] ${
                    viewMode === "edit"
                      ? "bg-indigo-500 text-white"
                      : "text-slate-300"
                  }`}
                >
                  編集
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("preview")}
                  className={`rounded-full px-2 py-0.5 text-[10px] ${
                    viewMode === "preview"
                      ? "bg-slate-800 text-slate-100"
                      : "text-slate-300"
                  }`}
                >
                  プレビュー
                </button>
              </div>

              <button
                type="button"
                className="rounded-md border border-slate-700 px-2 py-1 text-[10px] text-slate-200 hover:border-emerald-400"
              >
                Issueパネル
              </button>
            </div>
          </div>

          {/* エディタ本体 */}
          <form
            onSubmit={handleSave}
            className="flex flex-1 flex-col justify-between"
          >
            <div className="flex-1 p-3">
              {viewMode === "edit" ? (
                <textarea
                  value={currentContent}
                  onChange={(e) => handleContentChange(e.target.value)}
                  className="h-full w-full resize-none rounded-md border border-slate-800 bg-slate-950/90 px-3 py-2 font-mono text-xs text-slate-50 outline-none ring-0 placeholder:text-slate-500 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-500"
                  spellCheck={false}
                />
              ) : (
                <div className="h-full w-full overflow-auto rounded-md border border-slate-800 bg-slate-950/90 px-3 py-2 text-xs text-slate-100">
                  <p className="mb-2 text-[10px] text-slate-500">
                    ※ 簡易プレビュー（本格的なMarkdownレンダリングは後で実装）
                  </p>
                  <pre className="whitespace-pre-wrap font-mono">
                    {currentContent}
                  </pre>
                </div>
              )}
            </div>

            {/* 下部ステータスバーっぽいところ */}
            <div className="flex items-center justify-between border-t border-slate-800 bg-slate-900/90 px-4 py-2 text-[11px] text-slate-400">
              <div className="flex items-center gap-3">
                <span>現在のファイル: {selectedFile?.id ?? "-"}</span>
                <span className="hidden sm:inline">モード: UTF-8 / LF</span>
                <span className="hidden sm:inline">
                  行数: {currentContent.split("\n").length}
                </span>
              </div>
              <button
                type="submit"
                className="rounded-md bg-indigo-500 px-4 py-1.5 text-xs font-semibold text-white hover:bg-indigo-400"
              >
                このファイルを保存（モック）
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
