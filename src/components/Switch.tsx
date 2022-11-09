import React, { Component } from 'react';

import '@spectrum-web-components/switch/sp-switch.js';
import { Switch as SpectrumSwitch } from '@spectrum-web-components/switch';
// import 'web-component-essentials';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'sp-switch': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        }
    }
}

export class Switch extends Component {
    props: {
        label?: string;
        checked?: boolean;
        disabled?: boolean;
        onclick?: (e: any) => void;
    };
    switchRef: React.RefObject<SpectrumSwitch>;

    constructor(props: any) {
        super(props);
        this.switchRef = React.createRef();
    }

    componentDidMount() {
        this.switchRef.current.checked = this.props.checked;
        this.switchRef.current.disabled = this.props.disabled;

        if (this.props.onclick) {
            this.switchRef.current.addEventListener('click', (e: any) => this.props.onclick(e));
        }
    }

    componentDidUpdate(prevProps: any) {
        if (this.props.checked !== prevProps.checked) {
            this.switchRef.current.checked = this.props.checked;
        }
        if (this.props.disabled !== prevProps.disabled) {
            this.switchRef.current.disabled = this.props.disabled;
        }
    }

    render() {
        const styles = {
            justifyContent: 'center',
            alignItems: 'center',
            marginInline: '4px',
            '--spectrum-switch-text-gap': '0',
        };
        return <sp-switch style={styles} ref={this.switchRef} title={this.props.label}></sp-switch>;
    }
}
