// Copyright 2023 Redpanda Data, Inc.
//
// Use of this software is governed by the Business Source License
// included in the file licenses/BSL.md
//
// As of the Change Date specified in that file, in accordance with
// the Business Source License, use of this software will be governed
// by the Apache License, Version 2.0

package patch

import (
	"regexp"

	"github.com/redpanda-data/console/backend/pkg/connector/model"
)

// ConfigPatchCommon is a config patch that applies specific patches on a set of configurations
// that is common across several connectors (e.g. tasks.max).
type ConfigPatchCommon struct {
	ConfigurationKeySelector IncludeExcludeSelector
	ConnectorClassSelector   IncludeExcludeSelector
}

var _ ConfigPatch = (*ConfigPatchAll)(nil)

// NewConfigPatchCommon returns a new ConfigPatch for common connector configurations.
func NewConfigPatchCommon() *ConfigPatchCommon {
	return &ConfigPatchCommon{
		ConfigurationKeySelector: IncludeExcludeSelector{
			Include: regexp.MustCompile(`(tasks.max|key.converter|value.converter|header.converter|config.action.reload)`),
			Exclude: nil,
		},
		ConnectorClassSelector: IncludeExcludeSelector{
			Include: regexp.MustCompile(".*"),
			Exclude: nil,
		},
	}
}

// IsMatch implements the ConfigPatch.IsMatch interface.
func (c *ConfigPatchCommon) IsMatch(configKey, connectorClass string) bool {
	return c.ConfigurationKeySelector.IsMatch(configKey) && c.ConnectorClassSelector.IsMatch(connectorClass)
}

// PatchDefinition implements the ConfigPatch.PatchDefinition interface.
func (*ConfigPatchCommon) PatchDefinition(d model.ConfigDefinition) model.ConfigDefinition {
	switch d.Definition.Name {
	case "tasks.max":
		d.SetDisplayName("Max tasks").SetImportance(model.ConfigDefinitionImportanceHigh)
	case "key.converter":
		d.SetDisplayName("Kafka message key format").
			SetDocumentation("Format of the key in the Kafka topic. A valid schema must be available.").
			SetImportance(model.ConfigDefinitionImportanceHigh).
			SetComponentType(model.ComponentRadioGroup).
			AddRecommendedValueWithMetadata("io.confluent.connect.avro.AvroConverter", "AVRO").
			AddRecommendedValueWithMetadata("org.apache.kafka.connect.json.JsonConverter", "JSON").
			AddRecommendedValueWithMetadata("org.apache.kafka.connect.storage.StringConverter", "STRING").
			AddRecommendedValueWithMetadata("org.apache.kafka.connect.converters.ByteArrayConverter", "BYTES")
	case "value.converter":
		d.SetDisplayName("Kafka message value format").
			SetValue("org.apache.kafka.connect.converters.ByteArrayConverter").
			SetDocumentation("Format of the value in the Kafka topic. A valid schema must be available.").
			SetImportance(model.ConfigDefinitionImportanceHigh).
			SetComponentType(model.ComponentRadioGroup).
			AddRecommendedValueWithMetadata("io.confluent.connect.avro.AvroConverter", "AVRO").
			AddRecommendedValueWithMetadata("org.apache.kafka.connect.json.JsonConverter", "JSON").
			AddRecommendedValueWithMetadata("org.apache.kafka.connect.storage.StringConverter", "STRING").
			AddRecommendedValueWithMetadata("org.apache.kafka.connect.converters.ByteArrayConverter", "BYTES")
	case "header.converter":
		d.SetDisplayName("Kafka message headers format").
			SetValue("org.apache.kafka.connect.converters.ByteArrayConverter").
			SetDocumentation("Format of the headers in the Kafka topic. A valid schema must be available.").
			SetImportance(model.ConfigDefinitionImportanceLow).
			SetComponentType(model.ComponentRadioGroup).
			AddRecommendedValueWithMetadata("io.confluent.connect.avro.AvroConverter", "AVRO").
			AddRecommendedValueWithMetadata("org.apache.kafka.connect.json.JsonConverter", "JSON").
			AddRecommendedValueWithMetadata("org.apache.kafka.connect.storage.StringConverter", "STRING").
			AddRecommendedValueWithMetadata("org.apache.kafka.connect.converters.ByteArrayConverter", "BYTES")
	case "config.action.reload":
		d.SetComponentType(model.ComponentRadioGroup).
			AddRecommendedValueWithMetadata("restart", "RESTART").
			AddRecommendedValueWithMetadata("none", "NONE")
	}
	return d
}
