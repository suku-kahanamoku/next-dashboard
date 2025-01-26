export default function ButtonCmp({ children }: { children?: React.ReactNode }) {
	return (
		<div className="flex flex-row gap-4 items-center">
			<div className="">Default</div>
			<div className="btn btn-soft btn-primary">Primary</div>
			<div className="btn btn-soft btn-secondary">Secondary</div>
			<div className="btn btn-soft btn-accent">Accent</div>
			<div className="btn btn-soft btn-info">Info</div>
			<div className="btn btn-soft btn-success">Success</div>
			<div className="btn btn-soft btn-warning">Warning</div>
			<div className="btn btn-soft btn-error">Error</div>

			{children}
		</div>
	);
}
