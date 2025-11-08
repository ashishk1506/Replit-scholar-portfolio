export default function Footer() {
  return (
    <footer className="bg-card border-t border-card-border py-8">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center space-y-2">
          <p className="text-sm text-muted-foreground" data-testid="text-copyright">
            © 2025 Abha Kumari | PhD Candidate, University of Michigan
          </p>
          <p className="text-xs text-muted-foreground">
            Chemical Engineering Department
          </p>
        </div>
      </div>
    </footer>
  );
}
