import { JSX } from 'preact/jsx-runtime'
import { useSignal } from '@preact/signals'
import { clipboardCopy } from '~/utils/copy-to-clipboard.js'
import { CopyIcon, EditIcon } from '~/components/Icons'
import { Tooltip, TooltipConfig } from '../Tooltip'
import './index.css'

export type InlineCardProps = {
	icon: () => JSX.Element
	label: string
	copyValue?: string
	noCopy?: boolean
	style?: JSX.CSSProperties
	onEditClicked?: JSX.MouseEventHandler<HTMLButtonElement>
	statusMessageDuration?: number
	warningMessage?: string
	noExandButtons?: boolean
}

export const InlineCard = (props: InlineCardProps) => {
	const tooltip = useSignal<TooltipConfig | undefined>(undefined)

	const copyTextToClipboard = async (event: JSX.TargetedMouseEvent<HTMLButtonElement>) => {
		event.currentTarget.blur()
		await clipboardCopy(event.currentTarget.value || props.label)
		tooltip.value = { message: 'Copied!', x: event.clientX, y: event.clientY, duration: props.statusMessageDuration }
	}

	const Icon = props.icon

	return (
		<span class='inline-card' role='figure' style={ props.style } title={ props.label }>
			{ props.warningMessage ? <WarningSign /> : <></> }
			<span role='img'><Icon /></span>
			<data class='truncate text-legible' value={ props.label }>{ props.label }</data>
			<span role='menu' aria-label={props.noExandButtons ? undefined : "Spell-out actions"}>
				{ !props.noCopy ? (
					<button type='button' onClick={ copyTextToClipboard } value={ props.copyValue } tabIndex={ 1 }>
						<span role='img'><Icon /></span>
						<span><data class='truncate text-legible' value={ props.label }>{ props.label }</data></span>
						<span>
							<CopyIcon />
							<span>copy</span>
						</span>
					</button>
				) : <></> }
				{ props.onEditClicked ? (
					<button type='button' value={ props.copyValue } onClick={ props.onEditClicked } tabIndex={ 1 }>
						<span>
							<EditIcon />
							<span>edit</span>
						</span>
					</button>
				) : <></> }
			</span>
			{ props.warningMessage ? <WarningSign /> : <></> }
			<Tooltip config={ tooltip } />
		</span>
	)
}

const WarningSign = ({ message = 'Warning' }: { message?: string }) => {
	return <span role='alert' title={ message }>⚠</span>
}
