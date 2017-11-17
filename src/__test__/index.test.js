/* eslint-disable fp/no-mutation */
import Koa from 'koa';
import sita from '../index';

jest.mock('koa');

Koa.prototype.use = jest.fn();
Koa.prototype.listen = jest.fn();

const savedConsole = console;

describe('index', function index() {
  beforeAll(function indexBeforeAll() {
    global.console = {
      log: jest.fn(),
    };
  });

  beforeEach(function indexBeforeEach() {
    Koa.prototype.use.mockClear();
    Koa.prototype.listen.mockClear();
    global.console.log.mockClear();
  });

  afterAll(function afterAll() {
    global.console = savedConsole;
  });

  test('it calls server.listen() with a default port of 3000', function indexListenPort() {
    sita();
    expect(Koa.prototype.listen).toHaveBeenCalledWith(3000);
  });

  test('it calls server.use()', function indexCallsUse() {
    sita();
    expect(Koa.prototype.use).toHaveBeenCalled();
  });

  test('it passes a callback to server.use() that modifies the ctx object', async function indexUseCallback() {
    const mockCtx = {};
    sita();

    const useCallback = Koa.prototype.use.mock.calls[0][0];
    await useCallback(mockCtx);
    expect(mockCtx.body).toEqual('Hello Koa!');
  });

  test('it logs out the URI the server is running on', function indexStartLog() {
    const expectedMessage = expect.stringContaining(
      'Server starting at http://127.0.0.1:3000',
    );
    sita();

    expect(global.console.log).toHaveBeenCalledWith(expectedMessage);
  });
});
