/// <reference types="vite/client"/>
/// <reference types="pixi.js"/>

interface ImportMetaEnv {
  readonly VITE_SIZE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module '*.frag?raw' {
  const v: string
  export = v
}

declare module '*.vert?raw' {
  const v: string
  export = v
}

declare namespace GlobalMixins {
  interface DisplayObject {
    userData?: Record<string, any>
  }
}

type SceneName = 'prelude' | 'game'

type DisplayObject = import('pixi.js').DisplayObject

interface IEvent<T = DisplayObject, U = DisplayObject> {
  x: number
  y: number
  stopped: boolean
  target: T
  currentTarget: U
}

declare const canvas: HTMLCanvasElement
