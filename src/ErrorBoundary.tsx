import React from 'react';

class ErrorBoundary extends React.Component<{}, {error: boolean | null, errorInfo: string | null}> {
    constructor(props: any) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error: any, errorInfo: any) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
    }


    render() {
        if (this.state.errorInfo) {
            // Error path
            return (
                <div>
                    <h2>Oops, something went wrong.</h2>
                    <details>
                        {this.state.error && this.state.error.toString()}
                    </details>
                </div>
            )
        }
        // normally, just render children
        return this.props.children;
    }
}

export default ErrorBoundary;
