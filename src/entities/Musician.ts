import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Instrument } from "./Instrument";

@Entity("musician")
export class Musician {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  style: string;

  @OneToMany(() => Instrument, (instrument) => instrument.musician, {
    eager: true,
  })
  instruments: Instrument[];

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  @DeleteDateColumn()
  deletedAt: Date;
}
