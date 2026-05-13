export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-shell">
 

        <div className="footer-bottom">
          <span>(c) {year} Grimworn</span>
          <span>We build the motion against the flow.</span>
        </div>
      </div>
    </footer>
  )
}
