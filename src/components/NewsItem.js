import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, publishedAt, source } =
    props;
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={
          imageUrl
            ? imageUrl
            : "https://i.ytimg.com/vi/oNirZJqFMzg/maxresdefault.jpg"
        }
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <span
          className="position-absolute top-0 start-100 badge rounded-pill bg-danger"
          style={{ transform: "translate(-100%,-50%) " }}
        >
          {source.name}
          <span className="visually-hidden">unread messages</span>
        </span>
        <p className="card-text text-justify">{description}</p>
        <div className="text-center">
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
      <div className="card-footer">
        <small className="text-body-secondary">
          By author : {author ? author : "Unknown"} on{" "}
          {new Date(publishedAt).toUTCString()}
        </small>
      </div>
    </div>
  );
};

export default NewsItem;
