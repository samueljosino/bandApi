import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Instrument } from "./Instrument";
import { Musician } from "./Musician";
import { Studio } from "./studio";

@Entity("band")
export class Band {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  style: string;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  @DeleteDateColumn()
  deletedAt: Date;

  @OneToOne(() => Musician)
  @JoinColumn()
  musician: Musician;

  @ManyToMany(() => Studio, (studio) => studio.bands)
  @JoinTable()
  studios: Studio;
}
