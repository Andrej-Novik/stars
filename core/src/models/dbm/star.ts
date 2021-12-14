import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
} from 'typeorm'

@Entity({ name: 'stars' })
	
export class StarItem {
	@PrimaryGeneratedColumn('uuid')
	id: string
	@Column()
	name: string
	@Column()
	galaxy: string
	@Column()
	img: string
	@Column()
	text: string
}		
