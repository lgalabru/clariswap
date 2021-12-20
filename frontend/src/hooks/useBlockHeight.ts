import { StacksTestnet } from '@stacks/network';
import { useState, useCallback } from 'react';

export default function useBlockHeight(url: string) {
    const [blockHeight, setBlockHeight] = useState(0)
  
    const fetchBlockHeight = useCallback(async () => {
        const network = new StacksTestnet({ url });
        const updatedValue = await fetch(network.getInfoUrl())
            .then(res => (res.ok ? res : Promise.reject(res)))
            .then(async res => {
                let payload: any = await res.json();
                return payload.stacks_tip_height
            })
            .catch(e => -1)
        
        return setBlockHeight(updatedValue);
    }, [])
  
    return { blockHeight, fetchBlockHeight }
}