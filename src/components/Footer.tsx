import Container from './Container';

export default function Footer() {
  return (
    <Container className="py-16">
      <div className="flex flex-col items-center justify-center">
        <p className="text-secondary text-center text-sm">
          Design & Developed by 
           <b> {' '}
             <a
                    href="https://x.com/KumarNirupam1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium underline underline-offset-4 hover:opacity-80 transition"
                  >
                    Kumar Nirupam
                  </a>
            </b>
            <br /> &copy;{' '} {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </Container>
  );
}
