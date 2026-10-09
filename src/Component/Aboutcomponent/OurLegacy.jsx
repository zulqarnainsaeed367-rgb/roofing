import { useEffect, useRef, useState } from "react";
import { Play, X, ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import videoPoster from "../../assets/roofing-legacy-video.jpg";

const facebookVideoUrl = "https://www.facebook.com/reel/1149365364288820/";
const videoEmbedUrl =
  "https://www.facebook.com/plugins/video.php?" +
  new URLSearchParams({
    href: facebookVideoUrl,
    show_text: "false",
    width: "360",
    autoplay: "true",
  }).toString();

const OurLegacy = () => {
  const [showVideo, setShowVideo] = useState(false);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!showVideo) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [showVideo]);

  const openVideo = () => {
    dialogRef.current?.showModal();
    setShowVideo(true);
  };

  const closeVideo = () => dialogRef.current?.close();

  return (
    <>
      <section aria-labelledby="legacy-heading" className="w-full bg-[#F8F6F1] px-5 py-16 sm:px-8 md:py-20 lg:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <div className="mb-4 flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-9 bg-[#D9A44C]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A16D20]">
                Our Legacy
              </span>
            </div>

            <h2 id="legacy-heading" className="mb-5 text-3xl font-bold leading-tight tracking-[-0.03em] text-[#100E0B] sm:text-4xl lg:text-[44px]">
              Building a Legacy of
              <span className="block text-[#A16D20]">Roofing Excellence</span>
            </h2>

            <div className="mb-7 space-y-5 text-base leading-8 text-[#5E5548] md:text-[17px]">
              <p>
                At RCS Construction Services, our story is built on a commitment
                to quality craftsmanship, dependable service, and lasting customer
                relationships. We take pride in delivering professional roofing
                and construction solutions that protect homes, businesses, and investments.
              </p>
              <p>
                From roof repairs and replacements to residential and commercial
                construction projects, our focus remains on safety, attention to
                detail, and customer satisfaction. Every project represents our
                dedication to providing reliable solutions and maintaining the
                trust of the communities we serve.
              </p>
            </div>

            <Link
              to="/capability-statement"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-[3px] border border-[#D9A44C] bg-[#D9A44C] px-7 py-3.5 text-sm font-semibold text-[#100E0B] transition-colors hover:bg-[#E8BB71] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A16D20]"
            >
              Our Capabilities
              <ArrowRight size={17} aria-hidden="true" className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none" />
            </Link>
          </div>

          <div className="order-1 mx-auto w-full max-w-[360px] lg:order-2">
            <button
              type="button"
              onClick={openVideo}
              aria-label="Play RCS Construction Services roofing video"
              aria-haspopup="dialog"
              className="group relative block aspect-[9/16] w-full cursor-pointer overflow-hidden rounded-md border border-[#D9A44C]/30 bg-[#100E0B] shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A16D20]"
            >
              <img
                src={videoPoster}
                alt=""
                width={1080}
                height={1920}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] motion-reduce:transform-none"
              />
              <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#100E0B]/85 via-transparent to-transparent" />
              <span aria-hidden="true" className="absolute bottom-8 inset-x-0 flex flex-col items-center gap-3 text-white">
                <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#D9A44C] bg-[#100E0B]/80 text-[#D9A44C] transition-colors group-hover:bg-[#D9A44C] group-hover:text-[#100E0B]">
                  <Play size={25} fill="currentColor" className="ml-1" />
                </span>
                <span className="text-sm font-semibold">Watch Our Roofing Video</span>
              </span>
            </button>

            <a
              href={facebookVideoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex min-h-11 items-center justify-center gap-2 text-sm font-semibold text-[#795019] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A16D20]"
            >
              Watch on Facebook
              <ExternalLink size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <dialog
        ref={dialogRef}
        aria-labelledby="legacy-video-title"
        onClose={() => setShowVideo(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeVideo();
        }}
        style={{ width: "min(360px, max(220px, calc((100dvh - 160px) * 0.5625)))" }}
        className="m-auto max-h-[calc(100dvh_-_2rem)] max-w-[calc(100vw_-_2rem)] overflow-y-auto rounded-lg border border-[#D9A44C]/30 bg-[#100E0B] p-0 text-[#F5ECDD] shadow-2xl backdrop:bg-black/85"
      >
        <div>
          <div className="flex items-center justify-between gap-2 border-b border-white/10 py-1 pl-4 pr-1">
            <h3 id="legacy-video-title" className="text-sm font-semibold">Our Roofing Video</h3>
            <button
              type="button"
              onClick={closeVideo}
              aria-label="Close video"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded text-[#D9A44C] hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-[#D9A44C]"
            >
              <X size={22} aria-hidden="true" />
            </button>
          </div>

          <div className="aspect-[9/16] w-full bg-black">
            {showVideo && (
              <iframe
                src={videoEmbedUrl}
                title="RCS Construction Services Facebook roofing video"
                className="h-full w-full border-0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
              />
            )}
          </div>

          <a
            href={facebookVideoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-12 items-center justify-center gap-2 px-3 py-2 text-sm font-semibold text-[#D9A44C] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-[#D9A44C]"
          >
            Watch on Facebook
            <ExternalLink size={15} aria-hidden="true" />
          </a>
        </div>
      </dialog>
    </>
  );
};

export default OurLegacy;
