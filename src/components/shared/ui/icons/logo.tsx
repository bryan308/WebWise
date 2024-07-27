import { cn } from '@/lib/utils';
import styles from './styles/styles.module.scss';

export const Logo = () => (
	<svg
		className={cn(styles.svg_logo, 'w-7')}
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 300 300'
		shapeRendering='geometricPrecision'
		textRendering='geometricPrecision'
	>
		<g
			className={styles.left}
			transform='translate(.000001 0.000001)'
		>
			<rect
				width='17'
				height='115'
				rx='8'
				ry='8'
				transform='matrix(1.066595 0.803676-.890585 1.181937 102.417258 15.2588)'
				strokeWidth='0'
			/>
			<rect
				width='17'
				height='115'
				rx='8'
				ry='8'
				transform='matrix(1.066566-.803715 0.890628 1.181904 0 148.822253)'
				strokeWidth='0'
			/>
			<rect
				width='17'
				height='132.808061'
				rx='8'
				ry='8'
				transform='matrix(-.510551 0.653475-.500665-.391162 123.802249 148.903328)'
				strokeWidth='0'
			/>
			<rect
				width='17'
				height='115'
				rx='8'
				ry='8'
				transform='matrix(-.510551-.653475 0.578228-.451761 57.307959 203.495336)'
				strokeWidth='0'
			/>
		</g>
		<g
			className={styles.right}
			transform='translate(0 0.000001)'
		>
			<rect
				width='17'
				height='115'
				rx='8'
				ry='8'
				transform='matrix(1.066595 0.803676-.890585 1.181937 281.863367 135.15599)'
				strokeWidth='0'
			/>
			<rect
				width='17'
				height='115'
				rx='8'
				ry='8'
				transform='matrix(1.066566-.803715 0.890628 1.181904 179.446109 28.925063)'
				strokeWidth='0'
			/>
			<g transform='matrix(-.919935 0 0 1 291.529863 0)'>
				<rect
					width='17'
					height='132.808061'
					rx='8'
					ry='8'
					transform='matrix(-.510551 0.653475-.500665-.391162 123.802249 148.903328)'
					strokeWidth='0'
				/>
				<rect
					width='17'
					height='115'
					rx='8'
					ry='8'
					transform='matrix(-.510551-.653475 0.578228-.451761 57.307959 203.495336)'
					strokeWidth='0'
				/>
			</g>
		</g>
		<rect
			className={styles.middle}
			width='17'
			height='115'
			rx='8'
			ry='8'
			transform='matrix(1.279117 0.383901-.550976 1.835793 170.759581 41.342227)'
			strokeWidth='0'
		/>
	</svg>
);
