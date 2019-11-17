import React from 'react';
import ArticleTemplate from '../ArticleTemplate';

const ReverseString = () => {

    const titleContent = () => {
        return <React.Fragment>Reverse String</React.Fragment>
    }
    const bodyContent = () => {
        return (
            <div>
                <p>I think it would be wise to start with something simple for the first entry. Why not start with a bit of  string manipulation?</p>
                <p>The Ask: When a function is called with a string as it's input, The output should be the Reverse String.</p>
                <p>Tips and Hints: </p>
                <pre>
                    <code>
                        <p>Your function should start off like this...</p>
                        <p>function reverse(str)&#123; <br />
                            <span>   return str;</span>
                            <br />&#125;</p>
                        <p>{'// Tests for Function:'}</p>
                        <p>{'// reverse("Hello")'}</p>
                        <p>{'// reverse("Orange")'}</p>
                        <p>{'// reverse("Simone")'}</p>
                    </code>
                </pre>
                <p>Keep in mind that there are multiple solutions for this problem, none of which are incorrect.</p>
                <p>Solution #1: </p>
                <p>This first solution is worth noting but, will likely get rejected in an interview setting.
                    By using simple ES6 methods, we can skip the traditional approach to this solution.
                </p>
                <pre>
                    <code>
                        <p>function reverse(str) &#123; <br />
                            <span>   return str.split('').reverse().join('');</span>
                            <br />&#125;</p>
                        <p>{'// Tests for Function:'}</p>
                        <p>{'// reverse("Hello") === olleH'}</p>
                        <p>{'// reverse("Orange") === egnarO'}</p>
                        <p>{'// reverse("Simone") === enomiS'}</p>
                    </code>
                </pre>
                <p>Solution #2: </p>
                <p>This solution is the preferred approach. It indicates a understanding of the algorithm itself. It uses both a decrementing forloop and concatenation.
                </p>
                <pre>
                    <code>
                        <p>function reverse(str) &#123; <br />
                            <span>   let reversed = ' ';</span><br />
                            <span>   for (let i = str.length - 1; i >= 0; i--) &#123;</span><br />
                            <span>        reversed+=str[i]; </span><br />
                            <span>   &#125;</span>
                            <span>   return reversed;</span><br />
                            &#125;</p>
                        <p>{'// Tests for Function:'}</p>
                        <p>{'// reverse("Hello") === olleH'}</p>
                        <p>{'// reverse("Orange") === egnarO'}</p>
                        <p>{'// reverse("Simone") === enomiS'}</p>
                    </code>
                </pre>
            </div>)
    }

    return (
        <ArticleTemplate
            title={titleContent()}
            body={bodyContent()}
        />
    );
}
export default ReverseString;