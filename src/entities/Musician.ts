import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Band } from "./Band";
import { Instrument } from "./Instrument";

@Entity("musician")
export class Musician {
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

  @OneToMany(() => Instrument, (instrument) => instrument.musician, {
    eager: true,
  })
  instruments: Instrument[];
}
