import * as Koa from 'koa';

export interface Context {
  ctx: Koa.Context;
}

const createContext = ({ ctx }: { ctx: Koa.Context }): Context => {
  return {
    ctx,
  };
};

export { createContext };
