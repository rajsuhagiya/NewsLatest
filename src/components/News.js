import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const newsUpdate = async () => {
    props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    console.log(page, "page");
    setLoading(true);
    let data = await fetch(url);
    let jsonData = await data.json();
    console.log(jsonData);
    setArticles(articles.concat(jsonData.articles));
    setLoading(false);
    setPage(page + 1);
    setTotalResults(jsonData.totalResults);
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = capitalize(props.category) + " - NewsLatest ";
    newsUpdate();
    // eslint-disable-next-line
  }, []);
  const capitalize = (s) => {
    return s && s[0].toUpperCase() + s.slice(1);
  };

  const fetchMoreData = async () => {
    // setPage(page + 1);
    newsUpdate();
  };
  return (
    <div className="container" style={{ marginTop: "65px" }}>
      <h2 className="text-center mt-3" style={{ textTransform: "capitalize" }}>
        {props.category} - Top Headine
      </h2>
      {/* {this.state.loading && <Spinner />} */}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        //   style={{ display: "flex", flexDirection: "column-reverse" }}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="row m-3">
          {articles.map((element, index) => {
            return (
              <div
                className="col-md-4 mt-3 d-flex justify-content-center"
                key={index}
              >
                <NewsItem
                  title={element.title}
                  description={
                    element.description
                      ? element.description.slice(0, 88) + "..."
                      : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  publishedAt={element.publishedAt}
                  source={element.source}
                />
              </div>
            );
          })}
        </div>
      </InfiniteScroll>
      {/* <div className="container d-flex justify-content-between mt-3">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={() => this.handleClick("previous")}
          >
            Previous
          </button>

          <button
            disabled={
              this.state.page >=
              Math.ceil(this.state.totalResults / props.pageSize)
            }
            // disabled={
            //   this.state.page + 1 >
            //   Math.ceil(this.state.totalResults / props.pageSize)
            // }
            type="button"
            className="btn btn-dark"
            onClick={() => this.handleClick("next")}
          >
            Next
          </button>
        </div> */}
    </div>
  );
};

News.propTypes = {
  country: PropTypes.string,
  apiKey: PropTypes.string,
};

export default News;
