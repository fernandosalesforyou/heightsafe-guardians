import { Section, SectionTitle } from "./Section";

const faqs = [
  {
    q: "Quando é obrigatória a instalação de linha de vida em telhados?",
    a: "Sempre que houver atividades em altura com risco de queda e necessidade de proteção conforme a NR-35.",
  },
  {
    q: "Qual tipo de telhado pode receber linha de vida?",
    a: "Os sistemas podem ser projetados para telhados metálicos, fibrocimento, concreto e outras estruturas mediante análise técnica.",
  },
  {
    q: "Vocês realizam projeto e instalação?",
    a: "Sim. Desenvolvemos, instalamos e inspecionamos sistemas completos de linha de vida para telhados.",
  },
  {
    q: "Vocês vendem equipamentos?",
    a: "Não. Atuamos exclusivamente com projetos, inspeção e instalação.",
  },
];

export function Faq() {
  return (
    <Section tone="white">
      <SectionTitle
        eyebrow="FAQ"
        title="Perguntas Frequentes sobre Linha de Vida para Telhado"
      />
      <div className="mt-12 mx-auto max-w-3xl space-y-5">
        {faqs.map((f) => (
          <article
            key={f.q}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-primary">{f.q}</h3>
            <p className="mt-2 text-base text-muted-foreground leading-relaxed">{f.a}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}