import Navbar from "../navbar";
import Footer from "../footer";

/**
 * Renders the layout component with the given children.
 *
 * @param {React.ReactNode} children - The children to be rendered inside the layout.
 * @return {React.ReactNode} The rendered layout component.
 */
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Navbar />
        {children}
      <Footer />
    </div>
  )
}