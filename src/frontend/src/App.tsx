import { Button } from "@/components/ui/button";
import {
  AlertTriangle,
  ArrowRight,
  Banknote,
  BarChart3,
  CheckCircle2,
  Mail,
  Menu,
  MessageSquare,
  Phone,
  Target,
  TrendingDown,
  Users,
  X,
} from "lucide-react";
import { AnimatePresence, type Variants, motion } from "motion/react";
import { useEffect, useState } from "react";

// ── Fade-up animation variants ──────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

// ── Navigation ───────────────────────────────────────────────
const navLinks = [
  { label: "简介", href: "#intro", ocid: "nav.intro_link" },
  { label: "案例", href: "#cases", ocid: "nav.cases_link" },
  { label: "问题", href: "#problems", ocid: "nav.problems_link" },
  { label: "评测", href: "#assessment", ocid: "nav.assessment_link" },
  { label: "联系", href: "#contact", ocid: "nav.contact_link" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border shadow-xs"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#intro"
          className="font-display text-xl font-semibold tracking-tight text-foreground hover:text-primary transition-colors"
        >
          企业管理和数智化建设资深专家---王文军
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-ocid={link.ocid}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <Button
            asChild
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-sm px-5 text-sm"
          >
            <a href="#contact">预约咨询</a>
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden p-2 text-foreground"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  data-ocid={link.ocid}
                  className="text-base font-medium text-foreground py-1"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-sm bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 mt-1 w-full transition-colors"
              >
                预约咨询
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// ── Hero / 简介 ───────────────────────────────────────────────
function HeroSection() {
  return (
    <section
      id="intro"
      data-ocid="hero.section"
      className="relative min-h-screen flex items-center noise-overlay overflow-hidden"
    >
      {/* Decorative large number */}
      <span
        className="section-num absolute right-4 md:right-10 bottom-12 select-none pointer-events-none z-10"
        aria-hidden="true"
      >
        01
      </span>

      <div className="max-w-6xl mx-auto px-6 md:px-10 w-full pt-28 pb-24">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left column: text content */}
          <motion.div variants={stagger} initial="hidden" animate="visible">
            {/* Eyebrow */}
            <motion.p
              variants={fadeUp}
              className="text-sm font-medium text-primary uppercase tracking-widest mb-8"
            >
              独立顾问 · 企业管理咨询
            </motion.p>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-none tracking-tight text-foreground mb-8"
            >
              专注企业
              <br />
              <span className="text-primary">管理</span>与
              <br />
              风险咨询
            </motion.h1>

            {/* Divider */}
            <motion.div
              variants={fadeUp}
              className="w-16 h-px bg-primary mb-8"
            />

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              深耕企业运营与风险管理十余年，为成长期企业提供定制化战略落地、内控优化与合规管理服务。一对一深度协作，直接输出可执行方案，无冗余流程。
            </motion.p>

            {/* Key credentials */}
            <motion.div
              variants={stagger}
              className="mt-12 grid grid-cols-3 gap-6"
            >
              {[
                { num: "50+", label: "服务企业" },
                { num: "12年", label: "行业经验" },
                { num: "98%", label: "客户续签率" },
              ].map((stat) => (
                <motion.div key={stat.label} variants={fadeUp}>
                  <p className="font-display text-4xl md:text-5xl font-semibold text-foreground leading-none">
                    {stat.num}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2 tracking-wide">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="mt-12 flex flex-wrap gap-4"
            >
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-sm px-8 h-12 text-base gap-2"
                data-ocid="assessment.button"
              >
                <a href="#assessment">
                  企业健康度自测
                  <ArrowRight size={16} />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-foreground/30 hover:border-foreground text-foreground rounded-sm px-8 h-12 text-base"
              >
                <a href="#contact">预约咨询</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right column: office photo */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="hidden md:block relative"
          >
            <div className="relative overflow-hidden rounded-sm aspect-[4/5]">
              <img
                src="/assets/uploads/1-1.jpg"
                alt="顾问介绍"
                loading="lazy"
                className="w-full h-full object-cover object-top"
              />
              {/* Warm dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/20 via-transparent to-primary/10 pointer-events-none" />
            </div>
            {/* Floating accent bar */}
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-24 bg-primary rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── 企业案例 ─────────────────────────────────────────────────
const cases = [
  {
    index: 1,
    industry: "制造业",
    tag: "内控优化",
    challenge:
      "中型机械加工企业，内部管控体系缺失，跨部门协作效率低，年度损耗成本居高不下，管理层决策依赖经验而缺乏数据支撑。",
    outcome: "优化内部管控流程，建立数据看板体系，运营风险显著下降",
    metric: "运营成本降低 30%",
    ocid: "cases.item.1",
  },
  {
    index: 2,
    industry: "零售连锁",
    tag: "合规管理",
    challenge:
      "快速扩张的区域连锁品牌，面对劳动合规、供应商管理和财务核算三重压力，合规漏洞导致数次行政处罚，扩张计划被迫搁置。",
    outcome: "搭建合规管理体系，梳理供应链风险节点，重启扩张战略",
    metric: "合规风险归零，新增门店 18 家",
    ocid: "cases.item.2",
  },
  {
    index: 3,
    industry: "科技初创",
    tag: "战略落地",
    challenge:
      "B 轮融资后的科技公司，团队规模快速扩张但组织架构滞后，核心人才流失率攀升，战略目标与日常执行严重脱节，投资方开始质疑管理能力。",
    outcome: "重构组织架构与激励机制，建立 OKR 追踪体系，稳定核心团队",
    metric: "关键人才保留率提升至 94%",
    ocid: "cases.item.3",
  },
];

function CasesSection() {
  return (
    <section
      id="cases"
      data-ocid="cases.section"
      className="relative py-28 md:py-36 overflow-hidden"
    >
      {/* Decorative number */}
      <span
        className="section-num absolute left-4 md:left-10 top-8 select-none pointer-events-none"
        aria-hidden="true"
      >
        02
      </span>

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Section header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-16 md:mb-20"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-medium text-primary uppercase tracking-widest mb-4"
          >
            企业案例
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl md:text-5xl font-semibold text-foreground leading-tight"
          >
            真实项目，
            <br />
            可量化的结果
          </motion.h2>
        </motion.div>

        {/* Consulting session photo banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-12 relative overflow-hidden rounded-sm"
        >
          <div className="relative h-52 md:h-72 overflow-hidden rounded-sm">
            <img
              src="/assets/generated/consulting-session.dim_1200x800.jpg"
              alt="顾问咨询现场"
              loading="lazy"
              className="w-full h-full object-cover object-center"
            />
            {/* Overlay with warm tone */}
            <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/30 to-transparent pointer-events-none" />
            {/* Inset label */}
            <div className="absolute left-8 bottom-8">
              <p className="text-xs font-medium uppercase tracking-widest text-primary mb-1">
                深度协作
              </p>
              <p className="font-display text-xl md:text-2xl font-semibold text-foreground">
                一对一，真实深入，可量化
              </p>
            </div>
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {cases.map((c) => (
            <motion.article
              key={c.index}
              variants={fadeUp}
              data-ocid={c.ocid}
              className="group bg-card border border-border rounded-sm p-8 flex flex-col hover:border-primary/40 transition-colors duration-300"
            >
              {/* Top row */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary bg-primary/8 px-3 py-1 rounded-sm">
                  {c.tag}
                </span>
                <span className="font-display text-3xl font-light text-border">
                  0{c.index}
                </span>
              </div>

              {/* Industry */}
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">
                {c.industry}
              </p>

              {/* Challenge */}
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">
                {c.challenge}
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-border mb-6" />

              {/* Outcome */}
              <div className="flex items-start gap-3">
                <CheckCircle2
                  size={16}
                  className="text-primary mt-0.5 shrink-0"
                />
                <p className="text-sm text-foreground leading-relaxed">
                  {c.outcome}
                </p>
              </div>

              {/* Metric */}
              <p className="mt-4 font-display text-lg font-semibold text-primary">
                {c.metric}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ── 企业问题 ─────────────────────────────────────────────────
const problems = [
  {
    icon: AlertTriangle,
    title: "管理混乱",
    desc: "职责不清、流程缺失，管理层疲于救火，组织效率持续损耗。",
    ocid: "problems.item.1",
  },
  {
    icon: BarChart3,
    title: "合规风险",
    desc: "劳动法、税务、数据安全等合规盲区积累，一旦暴露代价高昂。",
    ocid: "problems.item.2",
  },
  {
    icon: Banknote,
    title: "现金流压力",
    desc: "应收账款拉长、付款节奏失控，现金流隐患成为增长瓶颈。",
    ocid: "problems.item.3",
  },
  {
    icon: Users,
    title: "人才流失",
    desc: "薪酬设计失当、晋升通道模糊，核心人才带着资源离职。",
    ocid: "problems.item.4",
  },
  {
    icon: Target,
    title: "决策失误",
    desc: "缺乏数据支撑与外部视角，战略判断频繁失误，资源严重错配。",
    ocid: "problems.item.5",
  },
  {
    icon: TrendingDown,
    title: "增长瓶颈",
    desc: "经验式管理难以支撑规模扩张，旧有打法边际效益递减。",
    ocid: "problems.item.6",
  },
];

function ProblemsSection() {
  return (
    <section
      id="problems"
      data-ocid="problems.section"
      className="relative py-28 md:py-36 bg-secondary overflow-hidden"
    >
      {/* Decorative number */}
      <span
        className="section-num absolute right-4 md:right-10 top-8 select-none pointer-events-none"
        aria-hidden="true"
      >
        03
      </span>

      {/* Subtle data visualization background */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <img
          src="/assets/generated/data-visual-new.dim_1200x600.jpg"
          alt=""
          loading="lazy"
          className="absolute right-0 bottom-0 w-2/3 md:w-1/2 h-full object-cover object-left opacity-[0.06] select-none"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-16 md:mb-20"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-medium text-primary uppercase tracking-widest mb-4"
          >
            企业问题
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl md:text-5xl font-semibold text-foreground leading-tight"
          >
            您是否正在
            <br />
            面对这些挑战？
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-muted-foreground text-lg max-w-xl"
          >
            这些是成长期企业最常见的管理痛点。识别问题是解决问题的第一步。
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {problems.map((p) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                variants={fadeUp}
                data-ocid={p.ocid}
                className="group bg-background border border-border rounded-sm p-8 hover:border-primary/50 hover:shadow-xs transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                  <Icon size={18} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

// ── 评测入口 ─────────────────────────────────────────────────
function AssessmentSection() {
  return (
    <section
      id="assessment"
      data-ocid="assessment.section"
      className="relative py-28 md:py-36 overflow-hidden"
    >
      {/* Decorative number */}
      <span
        className="section-num absolute left-4 md:left-10 top-8 select-none pointer-events-none"
        aria-hidden="true"
      >
        04
      </span>

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.p
              variants={fadeUp}
              className="text-sm font-medium text-primary uppercase tracking-widest mb-4"
            >
              评测入口
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-6"
            >
              企业运营健康度
              <br />
              与风控自测
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-lg text-muted-foreground leading-relaxed mb-12"
            >
              扫码立即开始评测，了解您企业的运营健康状况。5分钟完成，立即获得专属诊断报告。
            </motion.p>

            {/* QR Code */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col items-center"
            >
              <div className="relative inline-block">
                {/* Decorative border frame */}
                <div className="absolute -inset-3 border border-primary/20 rounded-sm pointer-events-none" />
                <div className="absolute -inset-6 border border-primary/8 rounded-sm pointer-events-none" />
                <img
                  src="/assets/uploads/qrcode.png"
                  alt="企业运营健康度与风控自测二维码"
                  className="w-60 h-60 object-contain rounded-sm bg-white p-2 shadow-xs"
                  loading="lazy"
                />
              </div>

              <p className="mt-8 text-sm text-muted-foreground">
                微信扫一扫 · 立即开始
              </p>

              <Button
                asChild
                className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-sm px-8 h-12 text-base gap-2"
                data-ocid="assessment.button"
              >
                <a href="#contact">
                  无法扫码？直接联系
                  <ArrowRight size={16} />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── 联系方式 ─────────────────────────────────────────────────
const contactItems = [
  {
    icon: Mail,
    label: "邮件",
    value: "aal8888@gmail.com",
    href: "mailto:aal8888@gmail.com",
  },
  {
    icon: MessageSquare,
    label: "微信",
    value: "13910925420",
    href: "#",
  },
  {
    icon: Phone,
    label: "电话",
    value: "13910925420",
    href: "tel:+8613910925420",
  },
];

function ContactSection() {
  return (
    <section
      id="contact"
      data-ocid="contact.section"
      className="relative py-28 md:py-36 bg-foreground overflow-hidden"
    >
      {/* Decorative number */}
      <span
        className="absolute right-4 md:right-10 top-8 select-none pointer-events-none font-display font-light leading-none"
        style={{
          fontSize: "clamp(4rem, 12vw, 9rem)",
          color: "oklch(0.25 0.012 55)",
          letterSpacing: "-0.03em",
        }}
        aria-hidden="true"
      >
        05
      </span>

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-medium uppercase tracking-widest mb-4"
            style={{ color: "oklch(0.52 0.155 38)" }}
          >
            联系方式
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl md:text-5xl font-semibold leading-tight mb-4"
            style={{ color: "oklch(0.963 0.008 75)" }}
          >
            开始一次
            <br />
            深度对话
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-lg leading-relaxed mb-16 max-w-md"
            style={{ color: "oklch(0.68 0.012 60)" }}
          >
            首次沟通免费，30分钟了解您的企业挑战，给出初步判断与建议方向。
          </motion.p>

          {/* Contact items */}
          <motion.div variants={stagger} className="grid sm:grid-cols-3 gap-6">
            {contactItems.map((item) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.label}
                  variants={fadeUp}
                  href={item.href}
                  whileHover={{ y: -2 }}
                  className="group border rounded-sm p-8 transition-colors duration-300"
                  style={{
                    borderColor: "oklch(0.28 0.012 55)",
                    backgroundColor: "oklch(0.2 0.01 55)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-sm flex items-center justify-center mb-5"
                    style={{ backgroundColor: "oklch(0.52 0.155 38 / 0.2)" }}
                  >
                    <Icon size={18} style={{ color: "oklch(0.52 0.155 38)" }} />
                  </div>
                  <p
                    className="text-xs uppercase tracking-widest mb-2"
                    style={{ color: "oklch(0.55 0.012 60)" }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="text-base font-medium"
                    style={{ color: "oklch(0.88 0.008 72)" }}
                  >
                    {item.value}
                  </p>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Response time note */}
          <motion.p
            variants={fadeUp}
            className="mt-10 text-sm"
            style={{ color: "oklch(0.45 0.01 58)" }}
          >
            通常在 24 小时内回复。
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

// ── Footer ───────────────────────────────────────────────────
function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {year} 王文军咨询. 保留所有权利。</p>
        <a
          href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors"
        >
          Built with ♥ using caffeine.ai
        </a>
      </div>
    </footer>
  );
}

// ── App ───────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <CasesSection />
        <ProblemsSection />
        <AssessmentSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
