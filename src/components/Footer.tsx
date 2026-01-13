import Container from './Container';

export default function Footer() {
  return (
    <Container className="py-16">
      <div className="flex flex-col items-center justify-center">
        <p className="text-secondary text-center text-sm">
          Design & Developed by 
           <b> {' '}
             Kumar Nirupam
            </b>
            <br /> &copy;{' '} {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </Container>
  );
}
