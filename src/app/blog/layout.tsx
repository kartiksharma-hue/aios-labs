import Link from "next/link";
import "./blog.css";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="aios-blog">
      <header className="aios-blog__bar">
        <Link href="/" className="aios-blog__logo">
          AIOS<span> Labs</span>
        </Link>
        <nav className="aios-blog__nav">
          <a href="/services/">Services</a>
          <a href="/case-studies/">Work</a>
          <Link href="/blog/">Blog</Link>
          <a href="/contact/">Contact</a>
        </nav>
      </header>
      {children}
      <footer className="aios-blog__foot">
        &copy; {new Date().getFullYear()} AIOS Labs. Digital Marketing &amp;
        Performance Agency in India.
      </footer>
    </div>
  );
}
