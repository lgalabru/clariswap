import renderer from 'react-test-renderer';
import BlockHeight from './BlockHeight';

test('Block height changes when blocks are mined', async () => {
    var component = renderer.create(
        <BlockHeight value={0}/>
    );
    var tree: any = component.toJSON();
    expect(tree.children[1]).toBe('0');
})
