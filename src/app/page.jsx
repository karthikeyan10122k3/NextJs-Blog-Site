import Image from "next/image";

export default function HomePage() {
  return (
    <div className="container px-4 text-light">
      <div className="row flex-lg-row-reverse align-items-center g-5 ">
        <div className="col-10 col-sm-8 col-lg-6">
          <Image
            src="/hero.gif"
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="450"
            height="300"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3 text-light">
            Bloggers, for Blog Writers
          </h1>
          <p className="lead">
            For aspiring bloggers and seasoned writers alike, this platform
            offers a space tailored specifically for blog writers, providing
            valuable resources, community support, and opportunities for growth
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 me-md-2"
            >
              Learn more
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Contact
            </button>
          </div>
          <div className="mt-2">
            <Image
              src="/brands.png"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="500"
              height="500"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
