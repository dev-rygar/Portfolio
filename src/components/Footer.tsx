
export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="md:w-[60vw] md:mx-auto px-8 md:px-24 py-6 text-center mb-4 text-muted-foreground">
            <p>&copy; {year} John Garry Tan. All rights reserved.</p>
        </footer>
    );
}
