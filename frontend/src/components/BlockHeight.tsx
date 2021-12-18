import { StacksTestnet } from "@stacks/network";
import React, { Component } from "react";

interface Props { }
interface State {
	blockHeight: number
}

class BlockHeight extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
		this.state = {
			blockHeight: 0
		}
  }

  async componentDidMount() {
		const network = new StacksTestnet({ url: "http://localhost:3999" })
		const data = await fetch(network.getInfoUrl())
			.then(res => (res.ok ? res : Promise.reject(res)))
			.then(res => res.json());
		this.setState({ blockHeight: data.stacks_tip_height });
  }

  render() {
    return (
      <div>
				Block: {this.state.blockHeight}
      </div>
    );
  }
}

export default BlockHeight;
