import React from 'react';
import articleContent from './article-content';
import ArticlesList from '../components/ArticlesList';
import NotFoundPage from '../pages/NotFoundPage';


const ArticlePage  = ({ match }) => {
    const name = match.params.name;
    const article = articleContent.find(article => article.name === name);

    const otherArticles = articleContent.filter(article => article.name !== name);

    if (!article) return (<NotFoundPage />);

    return (
        <>
        <h1>This is the {article.title} article.</h1>
        {article.content.map((paragraph, key) => (
            <p key={key}>{paragraph}</p>
        ))}
        <h3>Other Articles:</h3>
        <ArticlesList articles={otherArticles} />
        </>
    );
}

export default ArticlePage;