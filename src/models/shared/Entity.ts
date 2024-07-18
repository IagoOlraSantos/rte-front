export interface EntityProps {
  id: number;
}

export default abstract class Entity<Tipo, Props extends EntityProps> {
  readonly id: number;
  readonly props: Props;

  constructor(props: Props) {
    this.id = props.id;
    this.props = { ...props, id: this.id };
  }

  static from<Tipo, Props extends EntityProps>(this: new (props: Props) => Entity<Tipo, Props>, props?: Partial<Props>, ...args: any[]): Entity<Tipo, Props> {
    const instanceProps = { ...props } as Props;
    // @ts-ignore
    return new this(instanceProps, ...args);
  }

  isEqual(entity: Entity<Tipo, Props>): boolean {
    return this.id === entity.id;
  }

  isNotEqual(entity: Entity<Tipo, Props>): boolean {
    return !this.isEqual(entity);
  }

  clone(newProps?: Partial<Props>, ...args: any[]): Entity<Tipo, Props> {
    const updatedProps = { ...this.props, ...newProps } as Props;
    return new (this.constructor as new (props: Props, ...args: any[]) => Entity<Tipo, Props>)(updatedProps, ...args);
  }

  toRaw(): Props {
    return { ...this.props };
  }
}
