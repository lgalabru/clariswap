import { renderHook, act } from '@testing-library/react-hooks';
import useBlockHeight from './useBlockHeight';
import { StacksDevnetOrchestrator } from '@hirosystems/stacks-devnet-js';

const orchestrator = new StacksDevnetOrchestrator({
    path: "../protocol/Clarinet.toml",
    logs: true,
});

beforeAll(() => orchestrator.start());
afterAll(() => orchestrator.stop());

test('Block height changes when blocks are mined', async () => {
    var { result } = renderHook(() => useBlockHeight(orchestrator.getStacksNodeUrl()));
    await act(async () => {
        await result.current.fetchBlockHeight()
    })
    expect(result.current.blockHeight).toBe(-1);

    let block = orchestrator.waitForStacksBlock();

    await act(async () => {
        await result.current.fetchBlockHeight()
    })
    expect(result.current.blockHeight).toBe(1);


})
