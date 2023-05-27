import React, { Fragment, createContext, useReducer } from "react";
import AdminLayout from "../layout/index";
import AddArticle from "./addArticle";
import { articleReducer,articleState } from "./arcticleContext";

/* This context manage all of the products component's data */
export const ArticleContext = createContext();

const ArticleComponents = () => {
  return (
    <div className="grid grid-cols-1 space-y-4 p-4">
      < AddArticle/>
    </div>
  );
};

const Article = (props) => {
  /* To use useReducer make sure that reducer is the first arg */
  const [data, dispatch] = useReducer(articleReducer, articleState);

  return (
    <Fragment>
      <ArticleContext.Provider value={{ data, dispatch }}>
        <AdminLayout children={<ArticleComponents />} />
      </ArticleContext.Provider>
    </Fragment>
  );
};

export default Article;