// node modules

import PropTypes from "prop-types";

const CertifCard = ({ imgSrc, title, tags, classes }) => {
  return (
    <div className={"relative p-6 rounded-xl bg-gradient-to-r from-zinc-800 to-zinc-700 shadow-lg ring-1 ring-zinc-50/10 transition-transform transform hover:scale-[1.02] " + classes}>
      <figure className="img-box aspect-[3/1] rounded-lg overflow-hidden mb-6">
        <img src={imgSrc} alt={title} loading="lazy" className="w-full h-full object-cover" />
      </figure>
      <div className="flex flex-col gap-4">
        {/* Judul */}
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2">
          {tags.map((label, key) => (
            <span key={key} className="px-3 py-1 text-sm bg-zinc-600 text-zinc-100 rounded-full shadow-inner">
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

CertifCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  projectLink: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default CertifCard;
