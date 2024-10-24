import { JSX } from 'preact/jsx-runtime'
import { useSignal, useSignalEffect } from '@preact/signals'
import { clipboardCopy } from '~/utils/copy-to-clipboard.js'
import { CheckIcon, CopyIcon, EditIcon } from '~/components/Icons'
import './index.css'

export type MultilineCardProps = {
	icon: () => JSX.Element
	label: string
	copyValue?: string
	style?: JSX.CSSProperties
	onEditClicked?: JSX.MouseEventHandler<HTMLButtonElement>
	statusMessageDuration?: number
}

export const MultilineCard = ({ icon: Icon, label, copyValue, onEditClicked, style, statusMessageDuration = 1500 }: MultilineCardProps) => {
	const copyStatus = useSignal(false)

	const copyTextToClipboard = async (event: JSX.TargetedMouseEvent<HTMLButtonElement>) => {
		event.currentTarget.blur()
		await clipboardCopy(event.currentTarget.value || label)
		copyStatus.value = true
	}

	useSignalEffect(() => {
		if (copyStatus.value !== true) return
		setTimeout(() => copyStatus.value = false, statusMessageDuration)
	})

	return (
		<>
			<figure class = 'multiline-card' role = 'figure' style = { style } title = { label }>
				<span role = 'img'><Icon /></span>
				<span>
					<span>
						<data class = 'truncate text-legible' value = 'eth' >eth</data>
						<button type = 'button' onClick = { copyTextToClipboard } value = { copyValue } tabIndex = { 1 }>
							<span><data class = 'truncate text-legible' value = 'eth' >eth</data></span>
							<span>
								<EditIcon />
								<span>Edit</span>
							</span>
						</button>
					</span>
					<span>
						<data class = 'truncate text-legible' value = 'eth' >{ label }</data>
						<button type = 'button' onClick = { copyTextToClipboard } value = { copyValue } tabIndex = { 1 }>
							<span><data class = 'truncate text-legible' value = { label }>{label}</data></span>
							<span>
								<CopyIcon />
								<span>copy</span>
							</span>
						</button>
					</span>
				</span>
				{ copyStatus.value ? <span role='status'><CheckIcon /><span>Copied!</span></span> : <></> }
			</figure>
		</>
	)
}
