import { StyleSheet } from 'react-native'

export default (theme) => StyleSheet.create({
    wrapper: {
        backgroundColor: theme.fill_base,
    },
    container: {
        height: theme.input_item_height,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: theme.border_color_base,
        marginLeft: theme.h_spacing_lg,
        paddingRight: theme.h_spacing_lg,
        marginTop: 0,
        marginBottom: 0,
        flexDirection: 'row',
    },
    text: {
        marginRight: theme.h_spacing_sm,
        textAlignVertical: 'center',
        fontSize: theme.font_size_heading,
        color: theme.color_text_base,
        alignSelf: 'center',
    },
    input: {
        flex: 1,
        backgroundColor: 'transparent',
        fontSize: theme.input_font_size,
        color: theme.color_text_base,
    },
    inputDisabled: {
        backgroundColor: theme.fill_disabled,
        color: theme.color_text_disabled,
    },
    clear: {
        padding: 2,
        alignSelf: 'center',
    },
    extra: {
        marginLeft: theme.h_spacing_sm,
        fontSize: theme.font_size_subhead,
        color: theme.color_text_caption,
    },
    errorIcon: {
        marginLeft: theme.h_spacing_sm,
        width: theme.icon_size_sm,
        height: theme.icon_size_sm,
    },
})
