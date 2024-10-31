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
}

export const InlineCard = ({ icon: Icon, label, copyValue, noCopy, onEditClicked, style, statusMessageDuration = 1500, warningMessage: warningMessage }: InlineCardProps) => {
	const tooltip = useSignal<TooltipConfig | undefined>(undefined)

	const copyTextToClipboard = async (event: JSX.TargetedMouseEvent<HTMLButtonElement>) => {
		event.currentTarget.blur()
		await clipboardCopy(event.currentTarget.value || label)
		tooltip.value = { message: 'Copied!',  x: event.clientX, y: event.clientY, duration: statusMessageDuration }
	}

	return (
		<span class = 'inline-card' role = 'figure' style = { style } title = { label }>
			{ warningMessage ? <WarningSign /> : <></> }
			<span role = 'img'><Icon /></span>
			<data class = 'truncate text-legible' value = { label }>{label}</data>
			<span role = 'menu'>
				{ !noCopy ? (
					<button type = 'button' onClick = { copyTextToClipboard } value = { copyValue } tabIndex = { 1 }>
					<span role = 'img'><Icon /></span>
					<span><data class = 'truncate text-legible' value = { label }>{label}</data></span>
					<span>
						<CopyIcon />
						<span>copy</span>
					</span>
				</button>
				) : <></> }
				{ onEditClicked ? (
					<button type = 'button' value = { copyValue } onClick = { onEditClicked } tabIndex = { 1 }>
						<span>
							<EditIcon />
							<span>edit</span>
						</span>
					</button>
				) : <></> }
			</span>
			{ warningMessage ? <WarningSign /> : <></> }
			<Tooltip config = { tooltip } />
		</span>
	)
}

const WarningSign = ({ message = 'Warning' }: { message?: string }) => {
	return <span role = 'alert' title = { message }>⚠</span>
}
