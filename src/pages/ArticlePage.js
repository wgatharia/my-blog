import React, {useState, useEffect} from 'react';
import articleContent from './article-content';
import ArticlesList from '../components/ArticlesList';
import NotFoundPage from '../pages/NotFoundPage';
import CommentList from '../components/CommentsList';
import UpvotesSection from '../components/UpvotesSection';
import AddCommentForm from '../components/AddCommentForm';


const ArticlePage  = ({ match }) => {
    const name = match.params.name;
    const article = articleContent.find(article => article.name === name);

    //create object save and set state with defaults
    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/articles/${name}`);

            const body = await result.json();
            setArticleInfo(body);
        };

        fetchData();

    }, [name]);

    const otherArticles = articleContent.filter(article => article.name !== name);

    if (!article) return (<NotFoundPage />);

    return (
        <>
        <h1>{article.title}</h1>
        <UpvotesSection articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo} />
        {article.content.map((paragraph, key) => (
            <p key={key}>{paragraph}</p>
        ))}
        <CommentList comments={articleInfo.comments} />
        <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
        <h3>Other Articles:</h3>
        <ArticlesList articles={otherArticles} />
        </>
    );
}

export default ArticlePage;