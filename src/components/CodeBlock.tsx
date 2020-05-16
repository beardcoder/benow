import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import php from 'react-syntax-highlighter/dist/esm/languages/prism/php';
import ts from 'react-syntax-highlighter/dist/esm/languages/prism/typescript';
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import tomorrow from 'react-syntax-highlighter/dist/esm/styles/prism/tomorrow';

SyntaxHighlighter.registerLanguage('tsx', tsx);
SyntaxHighlighter.registerLanguage('ts', ts);
SyntaxHighlighter.registerLanguage('php', php);
SyntaxHighlighter.registerLanguage('js', javascript);

class CodeBlock extends PureComponent {
    static propTypes = {
        value: PropTypes.string.isRequired,
        language: PropTypes.string,
    };

    static defaultProps = {
        language: null,
    };

    render() {
        const { language, value } = this.props as any;
        return (
            <SyntaxHighlighter language={language} style={tomorrow}>
                {value}
            </SyntaxHighlighter>
        );
    }
}

export default CodeBlock;
