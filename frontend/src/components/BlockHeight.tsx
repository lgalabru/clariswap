import React, { useState } from 'react';

interface Props {
    value: number,
}

export default function BlockHeight(props: Props) {
	return (
		<div>
            Block: {props.value}
		</div>
	);
}
